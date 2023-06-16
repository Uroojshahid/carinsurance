// Special Countdown 
let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = () => {
    let futureDate = new Date("30 July 2021");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec = Math.floor(myDate / 1000) % 60;

    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;
}

countDown()

setInterval(countDown, 1000)



document.querySelector('#login-butn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
  }
  
  document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active');
  }
  window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  
    if(window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
    }else{
      document.querySelector('.header').classList.remove('active');
    };
  
  };
// Scroll Back To Top 
// function scrollTopBack(){
//     let scrollTopButton = document.querySelector("#scrollUp");
//     window.onscroll = function (){
//         var scroll = document.documentElement.scrollTop;
//         if(scroll >= 250){
//             scrollTopButton.classList.add('scrollActive');
//         } else{
//             scrollTopButton.classList.remove('scrollActive');
//         }
//     }
// }
// scrollTopBack();


// nav hide  
// let navBar = document.querySelectorAll('.nav-link');
// let navCollapse = document.querySelector('.navbar-collapse.collapse');
// navBar.forEach(function(a){
//     a.addEventListener("click", function(){
//         navCollapse.classList.remove("show");
//     })
// })

