window.addEventListener('keydown' , function(e) {

    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
    audio.play();

    const key = this.document.querySelector(`.keys`)
    console.log(e)
});

//  hello modified