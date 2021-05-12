
const secondHand = document.querySelector('.sec-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
    const Now = new Date();
    const sec = Now.getSeconds();
    const secdeg = ((sec / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secdeg}deg)`;


    const minutes = Now.getMinutes();
    const mindeg = ((minutes / 60) * 360)+((sec/60)*6)+90;
    minuteHand.style.transform = `rotate(${mindeg}deg)`;

    const hours = Now.getHours();
    const hourdeg = ((hours/12) * 360)+((minutes/360)*30)+90;
    hourHand.style.transform = `rotate(${hourdeg}deg)`;
}
setInterval(setDate, 1000);
