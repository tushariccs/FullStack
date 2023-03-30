const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
  var today = new Date();
  if (today.getDay() === 1) {
    res.send("It a weekend let's enjoy!");
  } else {
    res.send("It's a work day");
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
