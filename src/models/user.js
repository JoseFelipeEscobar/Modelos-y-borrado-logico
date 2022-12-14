const mongoose =require("mongoose");
const Schema=mongoose.Schema;
const mongooseSoftDelete=require('mongoose-delete');




const validateEmail =(email=>{
    var regex=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    return regex.test(email);
})

const userSchema=new Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    lastname:{
        type: String,
        trim: true,
        required: [false,"el nombre de usuario es requerdio"]
    },
    age:{
        type: Number,
        min:[18, 'la edad minima para carcel'],
        max:[90,'la mayor edad es 22, carne reseca']
    },
    email:{
        type:String,
        lowercase:true,
        trim:true,
        required:[true,"el correo es requerido"],
        unique:true,
        validate: {
            validator: validateEmail,
            mesagge:'Por favor digite un correo valido'
        }
    },
    familiares:{
        type:[{
            type:String,
            trim:true,
            required:[false,"nombre del familiar"]
        }],
    }

    // createdAt:{
    //     type:Date,
    //     default:Date.now
    // },
    // updatedAt:{
    //     type:Date,
    //     default:Date.now
    // },
    // deletedeAt:{
    //     type:Date,
    //     required:false
    // }
},{timestamps:true});
userSchema.plugin(mongooseSoftDelete);

module.exports =User=mongoose.model('user',userSchema);