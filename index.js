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