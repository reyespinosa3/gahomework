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

// app.use('/static', express.static(path.join(__dirname, 'public')));

app.get("/sample", function(req,res){
	// here's a sample route
  res.send({message: 'This is a sample page'})
});

// app.get('/', function(req, res) {
//   res.render('index')
// })
//
// app.get('/pizzas', function(req, res) {
//   res.render('pizza/pizza-index')
// })

// importing index.js and pizza.js from routes folder
const indexRoute = require('./routes/index');
const pizzaRoute = require('./routes/pizza');
const pizzaData  = require('./db/pizza');

app.use('/pizzas', pizzaRoute);
app.use('/', indexRoute);

/* error handler */
app.get('*', function(req, res) {
  res.status(404).send({message: 'Oops! Not found.'});
});
