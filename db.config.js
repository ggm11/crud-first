const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI || 'mongodb://localhost/CRUD';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const logConnection = (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Connected to MongoDB');
  }
};

mongoose.connect(uri, options, logConnection);

module.exports = mongoose;
