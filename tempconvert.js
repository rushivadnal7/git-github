document.getElementById("butn").onclick = function () {
    let temp;
    if (document.getElementById("checkbox1").checked) {
        temp = document.getElementById("inp").value;
        temp = Number(temp);
        temp = tocelsius(temp);
        document.getElementById("ans").innerHTML = temp;
    }
    else if (document.getElementById("checkbox2").checked) {
        temp = document.getElementById("inp").value;
        temp = Number(temp);
        temp = tofahrenheit(temp);
        document.getElementById("ans").innerHTML = temp;
    }
    else {
        document.getElementById("ans").innerHTML = " SELECT A SCALE OF TEMPERATURE";
    }
}


function tocelsius(temp) {
    return (temp - 32) * (5 / 9);
}
function tofahrenheit(temp) {
    return (temp * 9 / 5) + (32);
}