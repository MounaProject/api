const express=require("express");
const router=express.Router();
const log=require("../helper/logger");
const auteurModule=require("../module/auteur")

const multer=require('multer');
// Downdload image  with save links 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })

const upload=multer({storage:storage});
const type=upload.single('photo');

router.get('/auteur',auteurModule.getallAuteur);
router.post('/auteur',type,auteurModule.addAuteur);
router.get('/auteur/:auteurId',auteurModule.getAuteur);
router.patch('/auteur/:auteurId',type,auteurModule.updateAuteur);
router.delete('/auteur/:auteurId',type,auteurModule.deleteAuteur);





router.get('/auteur/ping',(req,res)=>{
    log.info('Auteur session')
    res.send('Welcome to auteur session')
})






module.exports=router;
