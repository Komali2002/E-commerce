//create express app
const { request } = require('express')
const exp=require('express')
const app=exp()

require('dotenv').config()

mclient=require("mongodb").MongoClient

//import path module
const path=require('path');

//connect build of react app with nodejs
app.use(exp.static(path.join(__dirname,'./build')))

//DB connection url
const DBurl=process.env.DATABASE_CONNECTION_URL;

//connect with mondodb server
mclient.connect(DBurl)
.then((client)=>{
    //get DB object
    let dbObj=client.db("shoppingdb");
    //create collection objects
    let userCollectionObject=dbObj.collection("usercollection");
    
    //sharing collection objects to APIs
    app.set("userCollectionObject",userCollectionObject)
    
    console.log("DB connection success")
})
.catch(err=>console.log('Error in DB connection',err))

//import userApp
const userApp=require('./APIS/userApi')


//execute specific api based on path
app.use('/user-api',userApp);

//dealing with page refresh
app.use('*',(request,response)=>{
    response.sendFile(path.join(__dirname,'./build/index.html'))
})

//handling invalid paths
app.use((request,response,next)=>{
    response.send({message:`path ${request.url} is invalid`})
})
//error handling middlewares
app.use((error,request,response,next)=>{
    response.send({message:"Error occured",reason:`${error.message}`})
})
//assign port number
const port=process.env.PORT
app.listen(port,()=>console.log(`Web server listening on port ${port}`))