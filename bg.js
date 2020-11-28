const body = document.querySelector("body");

const IMG_NUMBER = 6;

function paintImg(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function getRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    if(number <= 0) {
        number==1;
    } 
    return number;
}

function init() {
    const rnadomNumber = getRandom();
    paintImg(rnadomNumber);
}

init();