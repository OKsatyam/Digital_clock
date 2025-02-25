

let hourhand = document.querySelector('.hourhand')
let mintuehand = document.querySelector('.mintuehand')
let secondhand = document.querySelector('.secondhand')

let ticking = function(){
    let currentdate = new Date();
    let gethour =  currentdate.getHours();
    hourhand.textContent = gethour;
    let getmin =  currentdate.getMinutes();
    mintuehand.textContent = getmin;
    let getsec =  currentdate.getSeconds();
    secondhand.textContent = getsec;

}

setInterval(ticking,1000);