// const nameTag = document.createElement("h1");
// nameTag.textContent = window.prompt("ENTER YOUR NAME");
// document.body.append(nameTag);

const mylist = document.querySelector("#players");
const players = document.createElement("li");
players.textContent = "neymar";
mylist.prepend(players);
mylist.insertBefore(players , mylist.getElementsByTagName("li")[3])
