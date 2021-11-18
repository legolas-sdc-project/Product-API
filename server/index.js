const express = require('express');
const morgan = require('morgan');
const router = require('./router');

const app = express();

// Logging and parsing
app.use(morgan('dev'));
app.use(express.json());

// Set up our routes
app.use('/api', router);

// Run server
app.listen(3000, () => {
  console.log('Listening...');
});
