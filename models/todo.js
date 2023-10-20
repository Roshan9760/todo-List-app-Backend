// import mongoose
const mongoose = require('mongoose')

// route handler
const todeoShema = new mongoose.Schema(
    {
         title:{
            type:String,
            required:true,
            maxLength:50,
         },
         description:{
            type:String,
            required:true,
            maxLength:50
         },
         createdAt:{
            type:Date,
            required:true,
            default:Date.now()
         },
         updatedAt:{
              type:Date,
              required:true,
              default:Date.now()
         }
    }
)

// export
module.exports = mongoose.model("Todo",todeoShema)