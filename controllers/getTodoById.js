//import th model
const Todo = require("../models/todo");


//define route handler
exports.getTodoById = async(req,res) =>{
     try {
        
         // fectch the todo id 
         const id =req.params.id;
         const todo =await Todo.findById({_id:id})

         // if id not found 
         if(!todo){
             return res.status(404).json(({
                success:false,
                message:"No Data Is Found with Given Id"
             }))
         }

         // send the status
         res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`
         })
        
     } 
     catch (error) {
           
        console.error(error)
           console.log(error);
           res.status(500).json(
              {
                success:false,
                data:"Internal Server Error While Fetching The Data",
                message:error.message,
              }
           )
     }
}