const divbox = document.getElementById("box");
window.addEventListener("keydown", move);
let x = 0;
let y = 0;
function move(event) {
    switch (event.key) {
        case "ArrowDown":
            y += 5;
            divbox.style.top = y + "px";
            break;

        case "ArrowUp":
            y -= 5;
            divbox.style.top = y + "px";
            break;
        case "ArrowRight":
            x += 5;
            divbox.style.left = x + "px";
            break;
        case "ArrowLeft":
            x -= 5;
            divbox.style.left = x + "px";
            break;

    }
}