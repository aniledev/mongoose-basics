// CREATE A CONNECTION TO MONGODB
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection open!"))
  .catch((err) => {
    console.log("Oh no, error!");
    console.log(err);
  });

// CREATE A DOCUMENT SCHEMA FOR INPUTTED DATA
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
});
