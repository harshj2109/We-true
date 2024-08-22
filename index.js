const hamburger = document.querySelector(".hamburger")
const navitem = document.querySelector(".nav-items")
const items = document.querySelectorAll(".items")

hamburger.addEventListener('click',()=>{
    navitem.classList.toggle("toggle")


})

items.forEach(link=>{
    link.addEventListener('click',()=>{
    navitem.classList.toggle("toggle")

    })
})


const serviceOption = document.querySelector(".option-1");
const productOption = document.querySelector(".option-2");
const serviceSection = document.querySelector(".sec-2-1");
const productSection = document.querySelector(".sec-2-2");
serviceSection.style.display="block"


serviceOption.style.backgroundColor = "white";
serviceOption.style.color="black"

serviceOption.addEventListener("click", function () {
  
  serviceSection.style.display="block"
  productSection.style.display="none"
  serviceOption.style.backgroundColor = "white";
serviceOption.style.color="black"

productOption.style.backgroundColor = "black";
productOption.style.color="white"
});

productOption.addEventListener("click", () => {
  serviceSection.style.display="none"
  productSection.style.display="block"

serviceOption.style.backgroundColor = "black";
serviceOption.style.color="white"

productOption.style.backgroundColor = "white";
productOption.style.color="black"

});

