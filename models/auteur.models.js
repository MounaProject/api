const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const Auteur=new Schema({
        
    nom:({
        type:String,
        required:true,

    }),
    prenom:({
        type:String,
        required:true,

    }),
    email:({
        type:String,
        required:true,

    }),
    photo:({
        type:String,
        required:true,

    }),
    
    description:({
        type:String,
        required:true,

    }),
})





module.exports=mongoose.model('Auteur',Auteur)