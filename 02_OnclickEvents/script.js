//on click function (METHOD ONE-BEST ONE)
const btn1 = document.querySelector('#btn1');
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
function background() {
    const bgcolor = `rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.backgroundColor = bgcolor;
}
btn1.onclick =background;

//on click (METHOD TWO)
const btn2 = document.querySelector('#btn2');

btn2.onclick = (event) => {
    const bgcol = `rgb(${random(210)},${random(210)},${random(210)})`;
event.target.style.backgroundColor = bgcol;
}


// EVENT OBJECTS 

const btn3 = document.querySelector('#btn3');

function bgchange(e) {
    const randomcolor = `rgb(${random(250)},${random(250)},${random(250)})`;
    e.target.style.backgroundColor = randomcolor;
}
btn3.addEventListener('click', bgchange);