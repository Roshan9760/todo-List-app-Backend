//import th model
const Todo = require("../models/todo");

//define route handler
exports.getTodo = async(req,res) =>{
     try {
        
           // fetch all todo from database
           const todos =await Todo.find({});

           // response
           res.status(200).json({
             success: true,
             data: todos,
             message: "Entire Toto Data if Fetched Successfully",
           });
     } 
     catch (error) {
           console.error(error);
           res.status(500).json({
                success:false,
                error:error.message,
                message:"server Error While Fetching Data From Database",
           })
     }
}