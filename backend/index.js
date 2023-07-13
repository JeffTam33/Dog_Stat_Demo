require('dotenv').config();
const express = require('express');
const { getDb, connectToDb } = require('./db.js')

const app = express();
const cors = require('cors');
const PORT = 3040;
let db;
let collectionName = 'dog_breed_e';

connectToDb((error) => {
  if (!error) {
    app.listen(PORT, () => { 
      console.log(`it's alive on http://localhost:${PORT}`)
    })
    db = getDb()
  }
})

app.use(express.json());

//Allows to connect more than one server
app.use(cors({
  allowOrgin: "http://localhost:" + PORT, 
}))

app.get('/api/dog/:name', (req, res) => {
  db.collection(collectionName)
    .findOne({ breed: req.params.name })
    .then(result => {
      res.status(200).json(result);
    })
})

app.get('/api/all', (req, res) => {
  db.collection(collectionName)
    .find({})
    .toArray()
    .then(result => {
      const breeds = result.map(doc => doc.breed)
      res.status(200).json(breeds);
    })
})