const express = require("express");
const bodyParser = require("body-parser");
const { application } = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "Invalid date";
  }

  res.render("list", { kindOfDay: day });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
// res.write("<p>It's a work day</p>");
// res.write("<h1>It's a work day</h1>");
// res.send();
//Instead of writing multiple lines in get.
//we can do like this:
// res.sendFile(__dirname + "/index.html");
//If type are multiple work we can't create multiple html pages.
//So we use templates to avoid this problem.
//Due to these we use EJS.
