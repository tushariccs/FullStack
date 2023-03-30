const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const port = 3000;

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  var weight = parseInt(req.body.weight);
  var height = parseInt(req.body.height);
  var result = parseInt(weight / (height * height));
  res.send("Your BMI is" + result);
  console.log(result);
});

app.listen(port, () => {
  console.log("Port is working");
});
