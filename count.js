let count =0;

document.getElementById("decbutn").onclick = function(){
    count -=1;
    document.getElementById("count").innerHTML = count;
}
document.getElementById("resetbutn").onclick = function(){
    count =0;
    document.getElementById("count").innerHTML = count;
}
document.getElementById("incbutn").onclick = function(){
    count +=1;
    document.getElementById("count").innerHTML = count;
}