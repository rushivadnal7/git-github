let d1;
let d2;
let d3;

document.getElementById("butn").onclick = function () {
    d1 = Math.floor(Math.random() * 6) + 1;
    d2 = Math.floor(Math.random() * 6) + 1;
    d3 = Math.floor(Math.random() * 6) + 1;
    
    document.getElementById("dice1").innerHTML = d1;
    document.getElementById("dice2").innerHTML = d2;
    document.getElementById("dice3").innerHTML = d3;
   
}