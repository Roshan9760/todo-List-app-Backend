const mogse = require('mongoose')

require("dotenv").config(); // .env all value loaded to the procss object

const dbConnected =()=>{
     mogse.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
     })
     .then(()=>{console.log("DB Connected Successfully");})
     .catch((error)=>{
        console.log("Failed to Connect Database")
        console.error(error.message)
        process.exit(1)
    
    })
}

module.exports = dbConnected
