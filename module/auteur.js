
    const log= require("../helper/logger");
    const Auteur = require("../models/auteur.models");
    const functions = {
      // the log defines the error or commment the part of the code
    
      getallAuteur:async(req,res)=>{
      try {
        let auteur = await Auteur.find()
        log.info('Status ok , session update auteur')
        res.json({
          data:auteur
        })
      } catch (e) {
        log.info(e)
        
      }
     },

    getAuteur: async (req, res) => {
      try {
        let auteurId = req.params.auteurId;
        if (!auteurId) {
          log.info("auteurId id is not valid",auteurId);
          res.status(400).json({
            error: "Bad request"
          });
        }
        let auteur = await Auteur.findOne({
          _id: {
            $eq: auteurId
          }
        });
        log.info("student retrieved",auteur);
        res.json({
          data: auteur
        });
      } catch (error) {
        log.error(error);
        res.status(501).json("Internal error");
      }
    },


    

    deleteAuteur: async (req, res) => {
      try {
        let auteurId = req.params.auteurId;
        if (!auteurId) {
          log.info("student must be supply");
          res.status(400).json({
            error: "Bad request"
          });
        }
        let auteur = await Auteur.deleteOne({
          _id:auteurId})
  
        log.info("auteur deleted",auteur);
        res.json({
          data: 'Suprimer avec succès'
        });
      } catch (error) {
        log.error(error);
        res.status(501).json("Internal error");
      }
    },

    // Update auteur
    updateAuteur: async (req, res) => {
      try {
        let auteurId = req.params.auteurId;
        let auteurInfo = req.body;
        if (!auteurId || !auteurInfo) {
          log.info("Veuillez renseigner tous les champs requis");
          res.status(400).json({
            error: "Veuillez renseigner tous les champs requis"
          });
        }
        let auteur = await Auteur.updateOne({
          _id: {
            $eq: auteurId
          }
        }, {
        nom: auteurInfo.nom,
        prenom: auteurInfo.prenom,
        email: auteurInfo.email,
        photo: req.file.path,
        description:auteurInfo.description,
});
        log.info("auteur updated", auteur);
        res.json({
          data: auteur
        });
      } catch (error) {
        log.error(error);
        res.status(501).json("Internal error");
      }
    },



    





    addAuteur: async (req, res) => {
    if (!req.body.nom ) {
      log.error(req.body);
      res.status(400).res.json({
        msg: "Invalid fields"
      });
    } else {
      const newAuteur = Auteur({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        photo: req.file.path,
        description: req.body.description,
      });
      newAuteur.save(function (err, newlivre) {
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
  },};

  module.exports=functions;