
// ONCLICK EVENT
const btn1 = document.querySelector('#btn1');
        function random(number) {
            return Math.floor(Math.random() *(number + 1));
        }

        const backColor =`rgb(${random(255)},
            ${random(255)}, ${random(255)})`;

       btn1.addEventListener('click',() => {
            const backColor =`rgb(${random(255)},
            ${random(255)}, ${random(255)})`;
            btn1.style.backgroundColor = backColor;
        });

// BLUR/FOCUS EVENT
const password = document.querySelector('input[type="password"]');
password.addEventListener('focus',(event) => {
    event.target.style.backgroundColor = 'blue';
    });

password.addEventListener('blur', (event) => {
    event.target.style.backgroundColor = '';
});

// MOUSEOEVER/MOUSEOUT EVENT

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor=backColor;
});

btn2.addEventListener('mouseout',(event) => {
    event.target.style.backgroundColor= '';
});

const controller = new AbortController();
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'blue';
});
btn3.addEventListener('mouseout',(event) => {
    event.target.style.backgroundColor= '';
});





