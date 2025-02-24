const express =require('express')
const PORT = 4004
const app = express()


const mongoose = require('mongoose');


const port = process.env.PORT || 3000;

const mongoURI = 'mongodb://localhost:27017/your_database_name'; 

let dbConnected = false;


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
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
