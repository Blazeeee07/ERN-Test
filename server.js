const express=require("express");
const app=express();

app.use("/users/", require("./routes/usersRoutes"));

app.listen(8080, ()=>{
    console.log("Server is running at port 8080...");
})