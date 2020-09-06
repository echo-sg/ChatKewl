const mongoose = require("mongoose");
require('dotenv').config(); 
mongoose.connect(
  `mongodb+srv://kewl1test:${process.env.DBPASS}@kewl1test.ttn3a.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const roomSchema = new mongoose.Schema({
  name:{
    type:String,
  },
  description:{
    type:String,
  }
});

const Room = mongoose.model("kewl", roomSchema);

module.exports = Room;

