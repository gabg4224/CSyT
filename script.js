let menu = document.querySelector('#mobile-menu')
let menuLinks = document.querySelector('.navbar__menu')



menu.addEventListener('click',()=>{
    menu.classList.toggle('is_active')
    menuLinks.classList.toggle('active')
})


