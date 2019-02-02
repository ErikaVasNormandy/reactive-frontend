const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes/api');
const routesproject = require('./routes/api_project');


const path = require('path');
require('dotenv').config();


const app = express();

const port = process.env.PORT || 5000;

mongoose.connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));

mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();

});

app.use(bodyParser.json());

app.use('/api', routes);

app.use('/api_project', routesproject)


app.use((err, req, res, next) => {
   console.log(err);
   next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
  console.log(`${process.env.DB}`)
});



