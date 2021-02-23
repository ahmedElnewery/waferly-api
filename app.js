//dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const app = express();

const productRouter = require("./routers/product")
const profileRouter = require("./routers/profile")
const authRouter = require("./routers/auth")




//connect with db("waferly")
mongoose
  .connect("mongodb://127.0.0.1:27017/waferly-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
   
  })
  .then(() => {
    console.log("successfully connected to db...")
    //run the server
    app.listen(9000, console.log("the app is running in 9000..."));
  })
  .catch((error) => {
    throw "error in connecting the db";
  });

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
app.use("/products",productRouter)
app.use("/auth",authRouter)
app.use("/profile",profileRouter)