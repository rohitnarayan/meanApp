const   express     = require('express'),
        bodyParser  = require("body-parser"),
        morgan      = require("morgan"),
        path        = require("path"),
        mongoose    = require("mongoose"),
        passport    = require("passport"),
        cors        = require("cors"),
        jwt         = require("jsonwebtoken"),
        bcrypt      = require("bcrypt-nodejs");

var User = require("./app/models/user");

const app = express();

const  port = process.env.PORT || 8080; // initializing port

app.use(morgan("dev"));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/meanDB",function (err) {
  if(err)
    console.log("Error connecting to the database");
  else
    console.log("Connected at port = "+port);
});
var db = mongoose.connection;


app.listen(port);
