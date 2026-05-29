// MENU RESPONSIVE

const menuBtn = document.getElementById('menu-btn');

const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {

    navbar.classList.toggle('active');

});

// HEADER SCROLL

window.addEventListener('scroll', () => {

    const header = document.getElementById('header');

    if(window.scrollY > 50){

        header.classList.add('scrolled');

    }else{

        header.classList.remove('scrolled');

    }

});

// ACCORDION

document.querySelectorAll('.accordion-header').forEach(button => {

    button.addEventListener('click', () => {

        const content = button.nextElementSibling;

        button.classList.toggle('active');

        if(button.classList.contains('active')){

            content.style.maxHeight =
            content.scrollHeight + "px";

            content.style.padding = "20px 25px";

        }else{

            content.style.maxHeight = 0;

            content.style.padding = "0 25px";

        }

    });

});

// FACTS

const datosCuriosos = [

    "Las encías sanas no sangran.",

    "La periodontitis puede avanzar sin dolor.",

    "El tabaquismo es el principal factor de riesgo modificable.",

    "El biofilm es más resistente que las bacterias libres.",

    "La diabetes aumenta la gravedad periodontal.",

    "Las bacterias periodontales pueden entrar al torrente sanguíneo.",

    "La pérdida dental NO es normal con la edad.",

    "La prevención es más económica que el tratamiento."

];

const factBox = document.getElementById('fact-box');

const nextFactBtn =
document.getElementById('next-fact-btn');

nextFactBtn.addEventListener('click', () => {

    const randomIndex =
    Math.floor(Math.random() * datosCuriosos.length);

    factBox.style.opacity = 0;

    setTimeout(() => {

        factBox.textContent =
        datosCuriosos[randomIndex];

        factBox.style.opacity = 1;

    }, 300);

});

// SCROLL REVEAL

const reveals =
document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {

    reveals.forEach(reveal => {

        const windowHeight = window.innerHeight;

        const revealTop =
        reveal.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            reveal.classList.add('active');

        }

    });

});
