const num = Math.floor( Math.random() *10 +1);
let guesses =0;

document.getElementById("butn").onclick = function(){

    let guess = document.getElementById("inp").value;
    guesses+=1;

    if(guess== num){
        alert(` ${num} is the num . It took you ${guesses}`)
    }
    else if(guess<num){
        alert(`SMALL NUMBER , TRY AGAIN `)
    }
    else{
        alert(`BIG NUMBER , TRY AGAIN `)
    }
}