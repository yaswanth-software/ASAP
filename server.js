const express =require('express')
const PORT = 4004
const app = express()


const mongoose = require('mongoose');


const port = process.env.PORT || 5000;

const mongoURI = 'mongodb://localhost:2701'; 

let dbConnected = false;


mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected successfully!');
    dbConnected = true; 
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    dbConnected = false; 
  });


app.get('/', (req, res) => {
  if (dbConnected) {
    res.send('MongoDB connected successfully!!!!');
  } else {
    res.status(500).send('MongoDB connection failed!');
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
