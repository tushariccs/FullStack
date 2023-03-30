const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { application } = require("express");
app.use(bodyParser.urlencoded({ extended: true }));
const http = require("https");

app.use(express.static("public")); //to use properties of htmlm and css
//If we don't use above statements we don't get the css and images and many more required things.
//here we are making common folder to access that.
//and after make chnages in the html src and link href to refer that.

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const emailAddress = req.body.emailAddress;

  console.log(firstName + " " + lastName + " " + emailAddress);
});

app.listen(port, (res) => {
  console.log("Port is Working " + port);
});
