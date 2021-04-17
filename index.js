const express = require('express');
const app = express();
const pino = require('express-pino-logger')({prettyPrint:true});
require('dotenv').config()
const PORT = process.env.PORT || 5000;

// database
const db = require('./config/database');

// test database
db.authenticate()
    .then(()=>console.log('Database successfully connected'))
    .catch((err)=>console.log('Error: '+ err))

// logger
app.use(pino)

// routes
app.use('/movies',require('./routes/movies'))
app.use('/auth',require('./routes/auth'))

app.listen(PORT, ()=>console.log(`Server started at port ${PORT}`))