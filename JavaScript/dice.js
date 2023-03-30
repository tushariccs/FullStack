var randomNumber = Math.floor((Math.random() * 6))+1; // 0- 6
//console.log(randomNumber)
var randomNumber1 = Math.floor((Math.random() * 6)) + 1; // 0- 6

var randomDiceImage = "dice" + (randomNumber) + ".png";//dice1.png - dice6.png

var randomDiceImage1 = "dice" + (randomNumber1) + ".png";//dice1.png - dice6.png

var RandomImageSource = "Dicee Challenge - Starting Files/images/" + randomDiceImage;// images/dice1.png - images/dice6.png

var RandomImageSource1 = "Dicee Challenge - Starting Files/images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", RandomImageSource);

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", RandomImageSource1);


if (randomNumber > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}