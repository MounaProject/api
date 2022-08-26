// All import
const express=require('express');
const cors=require('cors');
const log=require('./helper/logger');
const connectDB = require('./config/db');
const bodyParser=require('body-parser');
const routes=require('./routes/root');


// Environnement variable param
require('dotenv').config()
const hostname=process.env.HOSTNAME;
const port=process.env.PORT;

// Connection à la base de donnée/
connectDB();


// Initialise express app
const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


// Les differentes Routes de l'application
app.use('/v1',routes)






app.listen(port, hostname, () => {
    console.log(`${process.env.MESSAGE},\nServer running at http://${hostname}:${port}/`);
  });