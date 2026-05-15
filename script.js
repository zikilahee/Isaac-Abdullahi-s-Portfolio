const typed = new Typed('.multiple-text',{

  strings: [
    'Frontend Developer' ,
    'UI/UX Designer'
  ],

  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,

  loop: true
});


ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content', {
  origin:'left'
});

ScrollReveal().reveal('.home-img',{
  origin:'right'
});

ScrollReveal().reveal('.about-content', {
  origin:'right'
});

ScrollReveal().reveal('.about-img',{
  origin:'left'
});

ScrollReveal().reveal('.service-box',{
  interval:200
});

ScrollReveal().reveal('.project-box',{
  interval:200
});

/* CONTACT */

ScrollReveal().reveal('.contact form', {
    origin: 'bottom'
});

ScrollReveal().reveal('.contact-info', {
    origin: 'top'
});


/* FOOTER */

ScrollReveal().reveal('.footer', {
    origin: 'bottom'
});


/* SCROLL TOP BUTTON */

const scrollTopBtn =
document.querySelector('.scroll-top');


window.addEventListener('scroll', () => {

    if(window.scrollY > 300){

        scrollTopBtn.classList.add('active');

    }

    else{

        scrollTopBtn.classList.remove('active');

    }

});


/* EMAIL JS */

emailjs.init("3oHWqovNKmzVEHvQJ");


const contactForm =
document.getElementById("contact-form");


const sendBtn =
document.querySelector(".send-btn");


const popup =
document.querySelector(".popup-message");



contactForm.addEventListener("submit", function(e){

    e.preventDefault();


    /* BUTTON LOADING */

    sendBtn.innerHTML = "Sending...";

    sendBtn.disabled = true;



    emailjs.sendForm(

        "service_kl9qwag",

        "template_k8wbxeu",

        this

    )

    .then(() => {


        /* SUCCESS */

        popup.classList.add("show");


        /* RESET FORM */

        contactForm.reset();


        /* RESTORE BUTTON */

        sendBtn.innerHTML = "Send Message";

        sendBtn.disabled = false;


        /* HIDE POPUP */

        setTimeout(() => {

            popup.classList.remove("show");

        }, 3000);

    })

    .catch((error) => {


        alert("Failed to send message.");


        sendBtn.innerHTML = "Send Message";

        sendBtn.disabled = false;


        console.log(error);

    });

});

// ----- MOBILE MENU TOGGLE -----
const menu = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  navList.classList.toggle('active');
});