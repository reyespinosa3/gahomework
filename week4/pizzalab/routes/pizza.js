console.log("pizza js in routes is up and running");
/* set up the router */
const express = require('express');
const pizzaRoute = express.Router();

/* import the pizza data */
const pizzaData = require('../db/pizza');
console.log(pizzaData);
/* you'll need two routes:
  - all pizza
  - individual pizza
  - BONUS: can you get individual pizza to work with the `flavorKey` property in the database? Maybe use some array methods... it would be convenient to be able to go to `/pizza/pepperoni` instead of `/pizza/0`.
*/

pizzaRoute.get('/', function(req, res) {
  res.render('pizza/pizza-index.ejs', {
    pizza: pizzaData
  })
})

pizzaRoute.get('/:id', function(req, res) {
  let id = req.params.id;
  for (i=0; i<pizzaData.length; i++) {
    if (id == pizzaData[i].flavorKey) {
      res.render('pizza/pizza-single.ejs', {
        pizza: pizzaData[i]
      })
    }
  }
  response.render('pizza/pizza-single.ejs', {
    pizza: pizzaData[id]
  })
})

/* export the router */
module.exports = pizzaRoute;
