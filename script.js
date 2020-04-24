const main = document.getElementById("main");
const voices = document.getElementById("voices");
const textarea = document.getElementById("text");
const readButton = document.getElementById("read");
const toggleButton = document.getElementById("toggle");
const closeButton = document.getElementById("close");
const data = [
  {
    image: "./img/drink.png",
    text: "I'm thirsty",
  },
  {
    image: "./img/angry.png",
    text: "I'm angry",
  },
  {
    image: "./img/food.png",
    text: "I'm hungry",
  },
  {
    image: "./img/grandma.png",
    text: "I love grandma",
  },
  {
    image: "./img/happy.png",
    text: "I'm happy",
  },
  {
    image: "./img/home.png",
    text: "I am in the home",
  },
  {
    image: "./img/hurt.png",
    text: "I'm hurt",
  },
  {
    image: "./img/outside.png",
    text: "I'm went to outside",
  },
  {
    image: "./img/sad.png",
    text: "I'm sad",
  },
  {
    image: "./img/scared.png",
    text: "I'm scared",
  },
  {
    image: "./img/school.png",
    text: "I'm went to school",
  },
  {
    image: "./img/tired.png",
    text: "I'm tired",
  },
];
data.forEach(createBox);
function createBox(item) {
  const box = document.createElement("div");
  const { image, text } = item;
  box.classList.add("box");
  box.innerHTML = `
  <img src="${image}"></img>
  <p class="info">${text}</p>
  `;
  document.querySelector("main").appendChild(box);
}
