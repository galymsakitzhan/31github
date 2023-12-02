
function headermobile(){
  const header = document.querySelector("header");
        const hamburgerBtn = document.querySelector("#hamburger-btn");
        const closeMenuBtn = document.querySelector("#close-menu-btn");
        // Toggle mobile menu on hamburger button click
        hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));
        // Close mobile menu on close button click
        closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());
}

headermobile();


function popUp(){
  const order = document.querySelector("#foder");
  const pop = document.querySelector('.pup_up');
     order.addEventListener("click", () => pop.classList.toggle("add"));

  const ex = document.querySelector("#end");
  ex.addEventListener("click", () => {
    pop.classList.remove("add");
  });

  document.addEventListener("keydown", (event)=> {
    if(event.key === "Escape"){
      pop.classList.remove("add");
    }
  })
}
popUp();




const forms = document.querySelectorAll('form');

const message = {
  loading : 'Загрузка',
  success : 'Спасибо! Скоро мы с вами свяжемся',
  failure : 'Что то пошло не так...'
 } 

 forms.forEach(item => {
  postData(item);
 })

 function postData(form){
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const statusMessage = document.createElement('div');
    statusMessage.classList.add("status");
    statusMessage.innerHTML = message.loading;
    // statusMessage.style.fontSize = "px";  
    statusMessage.style.background = "white";  
    statusMessage.style.borderRadius = "7px"
    statusMessage.style.margin = "5% 42%";
    statusMessage.style.color = "#212F3C";
      form.append(statusMessage)
  });

 const formData = new FormData(form);

 const object = {};
 formData.forEach(function(value,key){
  object[key] = value;
 });

const json = JSON.stringify(object);

const request = new XMLHttpRequest();
request.open("POST", "server.php")
request.setRequestHeader('Content-type', 'application/json');
request.send(json);

request.addEventListener('load', ()=>{
  if(request.status === 200){
    console.log(request.response);
    statusMessage.innerHTML = message.success;
    form.reset()
    setTimeout(() => {
      statusMessage.remove();
    },1000);
  }else{
    // statusMessage.innerHTML = message.failure;
  }
})
 }