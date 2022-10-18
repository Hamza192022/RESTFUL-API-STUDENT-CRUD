const mongoose = require("mongoose");
const validator = require("validator");


const studentScheme = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 3
    },
    email :{
        type : String, 
        required:true,
        unique : [true , " Email already present"],
        validator(value){
            if(!validator.isEmail(value)){
                throw  new Error("INVALID EMAIL");
            }
        }
    },
    phone :{
        type : Number,
        required:true,
        unique : true
    },
    address :{
        type :String,
        required : true
    }

})

// <============create collection============>
const Student = new mongoose.model("student",studentScheme);

module.exports=Student