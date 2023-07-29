let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J"];

document.getElementById("sufbtn").onclick = function () {
    let currind = cards.length-1;

    for (let i = cards.length - 1; i != 0; i--) {
        let randomind = Math.floor(Math.random() * cards.length);

        let temp = cards[currind];
        cards[currind] = cards[randomind];
        cards[randomind] = temp;
        // document.getElementById("")

    }
    console.log(cards);
    console.log(cards.length);
    document.getElementById("cardA").innerHTML = cards[0];
    document.getElementById("card2").innerHTML = cards[1];
    document.getElementById("card3").innerHTML = cards[2];
    document.getElementById("card4").innerHTML = cards[3];
    document.getElementById("card5").innerHTML = cards[4];
    document.getElementById("card6").innerHTML = cards[5];
    document.getElementById("card7").innerHTML = cards[6];
    document.getElementById("card8").innerHTML = cards[7];
    document.getElementById("card9").innerHTML = cards[8];
    document.getElementById("card10").innerHTML = cards[9];
    document.getElementById("cardK").innerHTML = cards[10];
    document.getElementById("cardQ").innerHTML = cards[11];
    document.getElementById("cardJ").innerHTML = cards[12];
}