// METHOD 1
// let a = window.prompt(" ENTER SIDE A");
// a = Number(a);

// let b = window.prompt(" ENTER SIDE B");
// b= Number(b);

// c= Math.sqrt( Math.pow(a,2) + Math.pow(b,2));

// console.log(" SIDE C IS " + c)
let a;
let b;
let c;

document.getElementById("mybutton").onclick = function(){

     a = document.getElementById("mytextboxa").value;
    a = Number(a);
    
     b = document.getElementById("mytextboxb").value;
    b = Number(b);

     c = Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));

    document.getElementById("labelc").innerHTML = " SIDE C IS : " + c;
    // console.log(typeof c)
}