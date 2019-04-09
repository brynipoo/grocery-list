const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

const dbRoute = 'mongodb://Admin:password1@ds261114.mlab.com:61114/grocery-list';

// connects the back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// only made for logging and bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

router.get('/getData', (req,res) => {
  Data.find((err,data) => {
    if(err) return res.json({ success: false, error: err });
    return res.json({ success: true, data:data });
  });
});

router.post('/updateData', (req,res) => {
  const { id, update } = req.body;
  Data.findOneAndUpdate(id, update, err => {
    if(err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.delete('/deleteData', (req,res) => {
  const { id } = req.body;
  Data.findOneAndDelete(id, err => {
    if(err) return res.send(err);
    return res.json({ success: true });
  });
}); 

router.post('/putData', (req,res) => {
  let data = new Data();

  const { id, message } = req.body;

  if((!id && id !== -0) || !message) {
    return res.json({ 
      success: false,
      error: "INVALID INPUTS",
    });
  }
  data.message = message;
  data.id = id;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for the http requests
app.use('/api', router);

// launch the backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`))