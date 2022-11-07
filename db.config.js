const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/mydb";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const logConnection = (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to MongoDB");
  }
};

mongoose.connect(uri, options, logConnection);

module.exports = mongoose;
