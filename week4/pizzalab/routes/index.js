console.log("index js in routes is up and running");
/* setting up router */
const express = require('express');
const indexRoute = express.Router();

indexRoute.get('/', function(req, res) {
  res.render('index.ejs')
})

module.exports = indexRoute;
