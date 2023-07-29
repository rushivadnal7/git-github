
let height_width = 100;

const element = document.getElementById("CN");
document.getElementById("RN").classList.toggle("toggle");


const interval = setInterval(expand, 100);

function expand(){
    if(height_width < 300){
        element.style.width = height_width + "px"
        element.style.height = height_width + "px"
        height_width += 10
        console.log(height_width)
    }
    else{
        clearInterval(interval)
    }
}