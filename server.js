 const express = require('express')
 const app = express()


 // load config from env file 
 require("dotenv").config();
 const PORT = process.env.PORT || 4000

 // middleware to parse json request body
 app.use(express.json());

 // import routes  from TODO Api
 const todoRoutes =  require("./routes/todos")

 // mount the todo API routes
 app.use("/api/v1",todoRoutes)

 // start server
 app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
 })

 // connect to db
 const dbConnected = require("./config/database");
 dbConnected()

 // default route also there always 
 app.get("/",(req,res)=>{
    res.send(`<h1>This is HOMEPAGE Baby </h1>`)
 })