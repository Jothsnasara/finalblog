const mongoose = require("mongoose");
//Write missing code here
mongoose.connect("mongodb+srv://jothsna10:jothsna18@cluster0.bt6tt9q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
