const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const Livre=new Schema({
        
    titre:({
        type:String,
        required:true,

    }),
    photo:({
        type:String,
        required:true,

    }),
    prix:({
        type:Number,
        required:true,

    }),
    parution:({
        type:String,
        required:true,

    }),
    
    categorie:({
        type:String,
        required:true,

    }),
    description:({
        type:String,
        required:true,

    }),

    Alaune:({
        type:String,
        default:'non',

    }),

    auteur:({
        type:Schema.Types.ObjectId,
        ref:'Auteur'
    })

})





module.exports=mongoose.model('Livre',Livre)