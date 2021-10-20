let menu = document.querySelector("#mobile-menu");
let menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("is_active");
  menuLinks.classList.toggle("active");
});

/*------------------ Cards Section----------------------------- */
let biographySet = document.querySelector("#biography__set");
let cardInfo = document.querySelector("#close__biography");
let homeBtn = document.querySelector("#home__btn");
let popUp = document.querySelector(".pop__up");
let body = document.querySelector('body')


let cardInstructors = document.querySelector('#instructors')
let infoInstructors =document.querySelector('#info__instructors')

homeBtn.addEventListener("click", () => {
  biographySet.classList.toggle('active')
  popUp.classList.toggle('active')
  body.style.overflowY = 'hidden'


});

cardInfo.addEventListener("click", () => {
    biographySet.classList.toggle('active')
    popUp.classList.toggle('active')
  body.style.overflowY = 'auto'
});


cardInstructors.addEventListener("click", (e) => {
  e.preventDefault()
  setInstructorInfo()
infoInstructors.classList.toggle('active')

});


 let setInstructorInfo = ()=>{
   if(infoInstructors.classList.contains('active')){
infoInstructors.innerHTML =''
   }else{
     infoInstructors.innerHTML = `lorem*3`
   }
 }


