const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/movieApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection open!"))
  .catch((err) => {
    console.log("Oh no, error!");
    console.log(err);
  });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   // we're connected!
//   console.log("Connection open!");
// });

// CREATE A SCHEMA
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

/* 
CREATE A MODEL CLASS
1. model name is always singular
2. Mongo pluralizes it and creates a collection as weill when the model is created
3. creates a class
4. new instances of the model class can be created and saved to the database 
*/
const Movie = mongoose.model("Movie", movieSchema);
// const amadeus = new Movie({
//   title: "Amadeus",
//   year: 1986,
//   score: 9.2,
//   rating: "R",
// });

// amadeus.save() is what transfers the the single instance javascript object to the database

// insertMany() does not require save; this method returns a promise
Movie.insertMany([
  { title: "Amelie", year: 2001, score: 8.3, rating: "R" },
  { title: "Alien", year: 1979, score: 8.1, rating: "R" },
  { title: "The Iron Giant", year: 1999, score: 7.5, rating: "PG" },
  { title: "Stand By Me", year: 1986, score: 8.6, rating: "R" },
  { title: "Moonrise Kingdom", year: 2012, score: 7.3, rating: "PG-13" },
]).then((data) => {
  console.log("INSERT MANY!");
  console.log(data);
});

/*
Movie.find({}).then((data) => {
  console.log("FIND FIRST");
  console.log(data);
});
*/

/*
Movie.find({ rating: "PG-13" }).then((data) => {
  console.log("FIND RATING");
  console.log(data);
});
*/

/*
Movie.find({ year: { $gte: 2010 } }).then((data) => {
  console.log("FIND YEAR GTE");
  console.log(data);
});
*/

/*
Movie.find({ year: { $lte: 2010 } }).then((data) => {
  console.log("FIND YEAR LTE!");
  console.log(data);
});
*/

Movie.findById("60cd983e57cb24ff14954365").then((data) => {
  console.log("FIND BY ID!");
  console.log(data);
});

Movie.updateOne({ title: "Amadeus" }, { year: 1984 }).then((res) => {
  console.log("UPDATE ONE BY QUERY");
  console.log(res);
});

Movie.updateMany({ title: "Amadeus" }, { year: 1984 }).then((res) => {
  console.log("UPDATE ONE BY QUERY");
  console.log(res);
});
