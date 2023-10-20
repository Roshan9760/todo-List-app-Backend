//import th model
const Todo = require("../models/todo");


//define route handler
exports.createTodo = async(req,res) =>{
     try {
        
         // extract title and description from request body
         const {title,description} =req.body;
         
         // create a new todo obj and insert in DB
         const response =await Todo.create({title,description})

         //send  a json response with a success flag
         res.status(200).json(
             {
                success:true,
                data:response,
                message:'Entery created Successfully'
             }
         )
     } 
     catch (error) {
           console.error(error)
           console.log(error);
           res.status(500).json(
              {
                success:false,
                data:"Internal Server Error",
                message:error.message,
              }
           )
     }
}