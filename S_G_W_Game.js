let computer;

const array = ["snake", "water", "gun"]
const node = document.createElement("p");

const boxes = document.getElementsByClassName("boxes");

let arr = Array.from(document.body.childNodes);
console.log(arr)

function boxclick(userValue) {
    let AIchoice, score, attempt = 1;

    document.body.appendChild(node)
    computer = Math.floor(Math.random() * 3)
    for (let i = 0; i < array.length; i++) {
        if (i == computer) {
            AIchoice = array[i]
        }
    }

    // if(userValue== "box1"){
    //     userValue= "snake"
    // }
    // else if(userValue == "box2"){
    //     userValue = "water"
    // }
    // else{
    //     userValue = "gun"
    // }



    if (userValue == "box1" && AIchoice == "water") {
        document.getElementById("box1").style.boxShadow = "9px 10px  #77DD77";
        document.querySelector("p").innerText = `You Won \n AI - ${AIchoice}`
        document.querySelector("p").style.color = "#77DD77"
        document.querySelector("p").style.fontSize = "25px"
        document.querySelector("p").style.fontWeight = "Bold"
        document.getElementById("box2").style.boxShadow = "none";
        document.getElementById("box3").style.boxShadow = "none";
    }
    else if (userValue == "box1" && AIchoice == "gun") {
        document.getElementById("box1").style.boxShadow = "9px 10px  #EF0107";
        document.querySelector("p").innerText = `You Loss \n AI -${AIchoice}`
        document.querySelector("p").style.color = "#EF0107"
        document.querySelector("p").style.fontSize = "25px"
        document.querySelector("p").style.fontWeight = "Bold"
        document.getElementById("box2").style.boxShadow = "none";
        document.getElementById("box3").style.boxShadow = "none";
    }
    else if (userValue == "box2" && AIchoice == "snake") {
        document.getElementById("box2").style.boxShadow = "9px 10px  #EF0107";
        document.querySelector("p").innerText = `You Loss \n AI -${AIchoice}`
        document.querySelector("p").style.color = "#EF0107"
        document.querySelector("p").style.fontSize = "25px"
        document.querySelector("p").style.fontWeight = "Bold"
        document.getElementById("box1").style.boxShadow = "none";
        document.getElementById("box3").style.boxShadow = "none";
    }
    else if (userValue == "box2" && AIchoice == "gun") {
        document.getElementById("box2").style.boxShadow = "9px 10px  #77DD77";
        document.querySelector("p").innerText = `You Won \n AI -${AIchoice}`
        document.querySelector("p").style.color = "#77DD77"
        document.querySelector("p").style.fontSize = "25px"
        document.querySelector("p").style.fontWeight = "Bold"
        document.getElementById("box1").style.boxShadow = "none";
        document.getElementById("box3").style.boxShadow = "none";
    }
    else if (userValue == "box3" && AIchoice == "snake") {
        document.getElementById("box3").style.boxShadow = "9px 10px  #77DD77";
        document.querySelector("p").innerText = `You Won \n AI -${AIchoice}`
        document.querySelector("p").style.color = "#77DD77"
        document.querySelector("p").style.fontSize = "25px"
        document.querySelector("p").style.fontWeight = "Bold"
        document.getElementById("box1").style.boxShadow = "none";
        document.getElementById("box2").style.boxShadow = "none";
    }
    else if (userValue == "box3" && AIchoice == "water") {
        document.getElementById("box3").style.boxShadow = "9px 10px  #EF0107";
        document.querySelector("p").innerText = `You Loss \n AI -${AIchoice}`
        document.querySelector("p").style.color = "#EF0107"
        document.querySelector("p").style.fontSize = "25px"
        document.querySelector("p").style.fontWeight = "Bold"
        document.getElementById("box1").style.boxShadow = "none";
        document.getElementById("box2").style.boxShadow = "none";
    }
    else if (userValue == AIchoice) {
        document.getElementById(userValue).style.boxShadow = "9px 10px  ##00BFFF";
        document.querySelector("p").innerText = `Mismatched \n AI -${AIchoice}`
        document.querySelector("p").style.color = "##00BFFF"
    }

    document.querySelector("p").style.display = "block";
    document.querySelector("p").style.position = "absolute";
    document.querySelector("p").style.left = "47%";
}
