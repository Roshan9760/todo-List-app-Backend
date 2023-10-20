//import th model
const Todo = require("../models/todo");

//define route handler
exports.updateTodo = async(req,res) =>{
     try {
        
         // fetch the todo id 
         const {id} =req.params;
         const {title,description} =req.body;

         const todo = await Todo.findByIdAndUpdate(
           { _id: id },
           { title, description, updatedAt: Date.now() }
         );

          
         
         // send the status
         res.status(200).json({
            success:true,
            data:todo,
            message:`TODO Updated Successfully`
         })
        
     } 
     catch (error) {
           
        console.error(error)
           console.log(error);
           res.status(500).json(
              {
                success:false,
                error:error.message,
                message:"Server Error While Updating Todo",
                
              }
           )
     }
}