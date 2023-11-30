const openShopping = document.querySelector('.shopping');
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
    images:"beach.jpg",
    price: 2000
  },
  {
    id:1,
    name:"Product 2",
    images:"charyn.jpg",
    price: 2300
  },
  {
    id:1,
    name:"Product 3",
    images:"desert.jpg",
    price: 1700
  },
  {
    id:1,
    name:"Product 4",
    images:"nature.jpg",
    price: 1000
  },
  {
    id:1,
    name:"Product 5",
    images:"nature2.jpg",
    price: 3000
  },
  {
    id:1,
    name:"Product 6",
    images:"beach.jpg",
    price: 2500
  }, 
]

let listCards = [];

const initApp = () => {
  prodcuts.forEach((value,key) => {
    let newDiv = document.createElement("div")
    newDiv.classList.add("item");
    newDiv.innerHTML = `
    <img src ="img/${value.images}" width="250px">
    <div class ="title">${value.name}</div>
    <div class="price">${value.price.toLocaleString()}</div>
    <button onclick="addToCard(${key}))">Add To Card</button>
    `

    list.appendChild(newDiv);
  })
}

initApp();


const addToCard =  (key) => {
  if(listCards[key] == null){
    listCards[key] = JSON.parse(JSON.stringify(prodcuts[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
const reloadCard = () => {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;

  listCards.forEach((value,key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;

    if(value != null){
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
        <div><img src = "img/${value.images}"></div>
        <div class ="cardTitle">${value.name}</div>
        <div class="cardPrice">${value.price.toLocaleString()}</div>

        <div>
          <button style="background-color: #560bad" 
          class="cardButton" onclick = "changeQuantity(
          ${key}, ${value.quantity - 1}")>-</button>
          <div class = "count">${count}</div>
          <button style="background-color: #560bad" 
          class="cardButton" onclick = "changeQuantity(
          ${key}, ${value.quantity + 1}")>+</button>
        </div>
      `
      listCard.appendChild(newDiv);
    }
    total.innerText = totalPrice.toLocaleString()
    quantity.innerHTML = count;
  })
}

const changeQuantity = (key,quantity) => {
  if(quantity == 0){
    delete listCard[key]
  }
  else{
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * prodcuts[key].price
  }
  reloadCard();
}