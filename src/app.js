const express=require('express');
const app=express();

//app.use("/", (req,res) => {
  //  res.send("Hello");
//});

app.use("/Hello", (req,res) => {
    res.send("Hello Niraj");
});

app.use("/test", (req,res) => {
    res.send("Hello route");
});

app.listen(3000);

console.log("server is running on port 40000");