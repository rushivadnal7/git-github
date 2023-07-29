function clock(){
    const time = new Date();
    
    const hour = time.getHours() %12; 
    const min = time.getMinutes();
    const sec = time.getSeconds();

    let hourhand = document.getElementById("hr");
    let minhand = document.getElementById("min");
    let sechand = document.getElementById("sec");

    let hourRotation = 30 * hour +  min  / 2 ;
    let minRotation = 6 * min ;
    let secRotation = 6 * sec;

    console.log(hour ,min , sec , hourRotation , minRotation , secRotation)

    hourhand.style.transform = "rotate(" + hourRotation + "deg)";
    minhand.style.transform = "rotate( " + minRotation + "deg)";
    sechand.style.transform = "rotate(" + secRotation + "deg)";

}

setInterval(clock , 1000)