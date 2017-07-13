var User = require("../models/user");

module.exports = {
  app.post("/users",function(req,res){
    var user          = new User();
    user.username = (req.body.username).trim();
    user.password = (req.body.password).trim();
    user.email    = (req.body.email).trim();

    if(user.username == null || user.password == null || user.email == null || user.username == "" || user.password == "" || user.email == "") {
      res.send("Ensure all parameters have been provided!!");
    }
    else {
      user.save(function(err) {
        if(err)
          res.send("Error occured = "+err);
        else {
          res.send("New User Created!!");
        }
      });//saving data to the database
    }
  });
}
