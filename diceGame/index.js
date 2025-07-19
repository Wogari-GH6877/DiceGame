// for the first dice

var randomNumber1=Math.floor(Math.random()*6)+1;

var diceRadomImage1="dice" + randomNumber1 + ".png";

var diceRadomImagePath1="./image/" + diceRadomImage1;

var firstImage= document.querySelectorAll("img")[0];

firstImage.setAttribute("src",diceRadomImagePath1);


//for the second dice
var randomNumber2=Math.floor(Math.random()*6)+1;

var diceRadomImage2="dice" + randomNumber2 + ".png";

var diceRadomImagePath2="./image/" + diceRadomImage2;

var secondimage= document.querySelectorAll("img")[1];

secondimage.setAttribute("src",diceRadomImagePath2);


// show the winner

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="FIRST DICE WIN🫵 ";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="SECOND DICE WIN💪 ";
}
else{
    document.querySelector("h1").innerHTML="DRAW IT AGIN🤦‍♂️";

}