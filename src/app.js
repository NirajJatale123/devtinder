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


app.get("/userGetData",(req,res)=>{
console.log("Data sent successfully");

res.send("Data sent successfully");

});

app.post("/UserInsertData",(req,res) =>{
res.send("data inserted successfully");

});

app.delete("/UserdeleteData",(req,res) =>{
  res.send("data deleted successfully");
  
  });
  app.listen(4000);

console.log("server is running on port 4000");