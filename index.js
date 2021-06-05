const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/movieApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
