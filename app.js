const express = require('express');
const app = express();
const config = require('config');
const mongoose = require('mongoose');
const path = require('path');

// Get data from front 
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Node static folder
if (process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

// Routes
app.use('/api/items', require(path.join(__dirname, 'routes', 'apiItem')));

const start = async () => {
  try {
    mongoose.set('debug', true);
    await mongoose.connect(config.get('mongo_uri'), {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: true,
      useCreateIndex: true
    });
    app.listen(config.get('port'), () => console.log('we on air'));
  } catch (err) {
    console.log(err);
  }
}

start();