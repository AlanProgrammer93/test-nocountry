const express = require('express');
const cors = require('cors');
const { sequelize } = require('./config/connectDB');
require('dotenv').config();

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


async function main() {
  try {
    await sequelize.authenticate();
    //await sequelize.sync({force: false});
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();