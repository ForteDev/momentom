const images = ["0.jpg","1.jpg","2.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)];
const background = document.querySelector(".background");
const bgImage = document.createElement("img");

const imgSrc = `img/${chosenImage}`;
background.style.backgroundImage = `url(${imgSrc})`;
//document.body.style.backgroundImage = `url(${imgSrc})`;