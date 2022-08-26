const express=require("express");
const router=express.Router();
const log=require("../helper/logger");
const livreRoute=require("./livres.root");
const auteurRoute=require("./auteur.root");


router.get('/',(req,res)=>{
    log.info('hello');
    res.send('Hello Mouna');
});

router.use(livreRoute);
router.use(auteurRoute);









module.exports=router;