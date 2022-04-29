const img = document.querySelector("#img");
const btnOn = document.querySelector("#btnOn");
const btnOff = document.querySelector("#btnOff");

function bulbon(){
    img.src = 'pic/bulb_on.png';
}

function bulboff(){
    img.src = 'pic/bulb_off.png';
}

btnOn.addEventListener('click', bulbon);
btnOff.addEventListener('click', bulboff);