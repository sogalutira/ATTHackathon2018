const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const CONFIG = require('./config.json');

// Initialize http server
const app = express();

// SET UP CONNECTION TO MONGO DATABASE
mongoose.connect(CONFIG.MONGO_URI);

// CHECK MONGODB CONNECTION ONCE MONGOOSE CONNECTS
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function(){
  console.log("Connected to MongoDB");
});

const Schema = mongoose.Schema;
const docSchema = new Schema({
  id: Number,
  name: String,
  location: String,
  time: String,
  partner: String,
  username: String,
  password: String
});

let Doc = mongoose.model('Doc', docSchema);

// Handle / route
app.get('/', (req, res) =>
  res.send('Table For Two')
)

app.get('/api/docs', (req, res) =>{
  Doc.find({})
  .then((results) => {
  return res.json(results);
  });
});

app.post('/api/docs', (req, res) => {
  Doc.create({
    doc: req.body.doc,
  })
  .then(results => res.json(results))
  .catch(err => res.send(err));
});

// Launch the server on port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});