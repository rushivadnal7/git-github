const mybutton = document.getElementById("mybutton");
const myAnimation = document.getElementById("div");

mybutton.addEventListener("click", move);

function move() {
    let timerid = null;
    let maxwid = 300; maxhei = 300;
    let x = 0;y=0;r=0;z=0;

    timerid = setInterval(frame, 1);

    function frame() {
        if (x < 300) {
            x += 1;
            myAnimation.style.left = x + "px";
        }
        else if(x >=300){
            y += 1;
            myAnimation.style.top = y + "px";
        }
        else if(r <300){
            r-=1;
            myAnimation.style.top = r + "px";
        }
        else if(z <300){
            z-=1;
            myAnimation.style.left = z + "px";
        }



        // else {
        //     y += 1;
        //     x += 1;
        //     myAnimation.style.top = y + "px"
        //     myAnimation.style.left = x + "px"
        // }
    }
}