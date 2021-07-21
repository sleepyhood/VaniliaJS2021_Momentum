const images = ["0.jpg","1.jpg","2.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

console.log(chosenImage);

const background = document.querySelector(".background");

background.appendChild(bgImage);
document.body.appendChild(background);

window.onload = function()
{
    document.body.style.backgroundImage = chosenImage;
    
};