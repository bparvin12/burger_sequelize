// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./controller/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  db.Burger.create({
    burger_name: 'Cheeseburger',
    devoured: false
  }).then(function (results) {
    console.log(results);
  });
  db.Burger.create({
    burger_name: 'Hamburger',
    devoured: false
  }).then(function (results) {
    console.log(results);
  });
  db.Burger.create({
    burger_name: 'Double Double',
    devoured: false
  }).then(function (results) {
    console.log(results);
  });
  db.Burger.create({
    burger_name: 'Protein Style',
    devoured: true
  }).then(function (results) {
    console.log(results);
  });
  db.Burger.create({
    burger_name: 'Charburger',
    devoured: true
  }).then(function (results) {
    console.log(results);
  });
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
