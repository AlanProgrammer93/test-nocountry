const express = require('express');
const cors = require('cors');
require('dotenv').config();
//const path = require('path')

/* const connectDb = require('./config/connectDB');
connectDb() */

const app = express();

// Config Use
app.use(cors());
app.use(express.json());
//app.use(express.static('public'));

/* app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
}) */

// Routes
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000
var server = app.listen(PORT, () => console.log(`Server running port ${PORT}`))
