const openShopping = document.querySelector('.openShopping');
const closeShopping = document.querySelector('.closeShopping');
const list = document.querySelector('.list');
const listCard = document.querySelector('.listCard');
const total = document.querySelector('.total');
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
})
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
})

let prodcuts = [
  {
    id:1,
    name:"Product 1",
    images:"1.PNG",
    price: 2000
  },
  {
    id:1,
    name:"Product 2",
    images:"2.PNG",
    price: 2300
  },
  {
    id:1,
    name:"Product 3",
    images:"3.PNG",
    price: 1700
  },
  {
    id:1,
    name:"Product 4",
    images:"4.PNG",
    price: 1000
  },
  {
    id:1,
    name:"Product 5",
    images:"5.PNG",
    price: 3000
  },
  {
    id:1,
    name:"Product 6",
    images:"6.PNG",
    price: 2500
  }, 
]

let listCards = [];

const initApp = () => {
  prodcuts.forEach((value,key) => {
    let newDiv = document.createElement("div")
    newDiv.classList.add("item");
    newDiv.innerHTML = `
    <img src ="img/${value.images}">
    <div class ="title">${value.name}</div>
    <div class="price">${value.price.toLocaleString()}</div>
    <button onclick="addToCard(${key}))"Add To Card</button>
    `

    list.appendChild(newDiv);
  })
}

initApp();
