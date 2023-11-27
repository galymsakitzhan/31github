
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
  const order = document.querySelector("#submit");
  const pop = document.querySelector('#pup_up');
     order.addEventListener('click', () => pop.classList.toggle("add"));
}

popUp();