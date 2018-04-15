/* dependencies & app setup */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();

/* setting up port & listen */
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

/* set the view engine */
app.set('views', './views');
app.set('view engine', 'ejs');

/* error logger, static routes */
app.use(logger('dev'));
app.use(express.static('public'));


app.get("/sample", function(req,res){
	// here's a sample route
  res.send({message: 'This is a sample page'})
});
// returns header, main and footer for Ada's Pizza homepage
app.get("/homepage", function(req, res){
  res.render("index");
})

// returns header, main and footer for all pizza page
app.get("/pizzas", function(req, res) {
  res.render(__dirname + "/views/pizza/pizza-index");
})

// return header, main and footer for individual pizza pages
app.get("/pizzas/:id", function(req, res) {
  res.render(__dirname + "/views/pizza/pizza-single");
})

/* error handler */
app.get('*', function(req, res) {
  res.status(404).send({message: 'Oops! Not found.'});
});
