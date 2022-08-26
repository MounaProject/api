const express=require("express");
const router=express.Router();
const log=require("../helper/logger");
const livremodule=require("../module/livre")

const multer=require('multer')
// Downdload image  with save links 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname+ '-' + uniqueSuffix)
    }
  })

const upload=multer({storage:storage});
const type=upload.single('photo');


router.get('/livre',livremodule.getallLivre);
router.post('/livre',type,livremodule.addLivre);
router.get('/livre/:livreId',livremodule.getLivre);
router.patch('/livre/:livreId',type,livremodule.updateLivre);
router.delete('/livre/:livreId',type,livremodule.deleteLivre);


router.post('/livre',upload.single('jpeg'),livremodule.addlivre)


router.get('/livre/ping',(req,res)=>{
    log.info('livre session')
    res.send('Welcome to Livre')
})






module.exports=router;
