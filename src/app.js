const express=require('express');
const app=express();
const User =require("./model/user");


const connectDB = require("./config/database");
app.use(express.json())
app.post("/signup", async (req,res) => {
//const userObj={
    //firstname:"Niraj",
    //lastName:"Jtatle",
    //age:"20",
    //email:"nj1230@gmail.com"

//}
 const user = new User(
    // firstName:"Tike",
    // lastName:"mike",
    // age:20,
    // emailId:"nj1230@gmail.com",
    // password:"nnj@123",
    req.body

 );
 try{
 await user.save();
 res.send("user added successfully");
 }
 catch(err){
    res.status(400).send("error saving  data" + err.message);
 }
});

app.get("/user", async (req,res) => {
    const userEmail=req.body.userEmail;
     try{
        const user = await User.find({emailId:userEmail});
        res.send(user);
     }
     catch(err){
        res.status(400).send("error gettig  data" + err.message);
     }
    });
    
connectDB()
.then(()=> {
    console.log("DB connet successful");
    app.listen(4000);
    console.log("server listenin on 4000");
})
.catch(err => {
console.error("Databse cannnont be connected!!")
});
