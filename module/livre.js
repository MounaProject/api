const log = require("../helper/logger");
const Livre = require("../models/livre.model");
const functions = {

  getLivre: async (req, res) => {
    try {
      let livreId = req.params.livreId;
      if (!livreId) {
        log.info("livreId id is not valid",livreId);
        res.status(400).json({
          error: "Bad request"
        });
      }
      let livre = await Livre.findOne({
        _id: {
          $eq: livreId
        }
      });
      log.info("student retrieved",livre);
      res.json({
        data: livre
      });
    } catch (error) {
      log.error(error);
      res.status(501).json("Internal error");
    }
  },


  getallLivre: async (req, res) => {
    try {
      let livre = await Livre.find()
      log.info('Status ok , session update livre')
      res.json({
        data: livre
      })
    } catch (e) {
      log.info(e)

    }
  },
// Delete livre 
deleteLivre: async (req, res) => {
      try {
        let livreId = req.params.livreId;
        if (!livreId) {
          log.info("student must be supply");
          res.status(400).json({
            error: "Bad request"
          });
        }
        let livre = await Livre.deleteOne({
          _id:livreId})
  
        log.info("livre deleted",livre);
        res.json({
          data: 'Suprimer avec succès'
        });
      } catch (error) {
        log.error(error);
        res.status(501).json("Internal error");
      }
    },






updateLivre: async (req, res) => {
    try {
      let livreId = req.params.livreId;
      let livreInfo = req.body;
      if (!livreId || !livreInfo) {
        log.info("Veuillez renseigner tous les champs requis");
        res.status(400).json({
          error: "Veuillez renseigner tous les champs requis"
        });
      }
      let livre = await Livre.updateOne({
        _id: {
          $eq: livreId
        }
      }, {
        nom: livreInfo.nom,
        prenom: livreInfo.prenom,
        email: livreInfo.email,
        photo: req.file.path,
        description: livreInfo.description,
      });
      log.info("livre updated", livre);
      res.json({
        data: livre
      });
    } catch (error) {
      log.error(error);
      res.status(501).json("Internal error");
    }
  },



  addLivre: async (req, res) => {
    if (!req.body.titre) {
      log.error(req.body);
      res.status(400).json({
        msg: "Invalid fields"
      });
    } else {
      const newLivre = Livre({
        titre: req.body.titre,
        photo: req.file.path,
        prix: req.body.prix,
        parution: req.body.parution,
        categorie: req.body.categorie,
        description: req.body.description,
        auteur: req.body.auteur,
      });
      newLivre.save(function (err, newlivre) {
        if (err) {
          res.status(501).json({

            error: "Internal error retry later"
          });
          log.info(err);
        } else {
          res.status(200).json({
            data: newlivre
          });
        }
      });
    }
  },

  addlivre: async (req, res) => {
    if (!req.body.titre || !req.body.photo) {
      log.error(req.body);
      res.status(400).res.json({
        msg: "Invalid fields"
      });
    } else {
      const newlivre = Livre({
        titre: req.body.titre,
        photo: req.file.path,
        prix: req.body.prix,
        parution: req.body.parution,
        categorie: req.body.categorie,
        description: req.body.description,
        auteur: req.body.auteur,
      });
      newlivre.save(function (err, newlivre) {
        if (err) {
          res.status(501).json({
            error: "Internal error retry later"
          });
        } else {
          res.status(200).json({
            data: newlivre
          });
        }
      });
    }
  },
};

module.exports = functions;