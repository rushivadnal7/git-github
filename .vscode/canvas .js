// let canvas = document.getElementById("mycanvas");
// let context =canvas.getContext("2d");


// context.beginPath();
// context.moveTo(0,0);
// context.lineTo(250,500);
// context.lineTo(500,500);
// context.stroke();

const i = document.querySelector("time");
let n = Date.now ;
let r = Math.floor((n/1000)%60);
i.textContent = ` ${r}`
console.log(r)