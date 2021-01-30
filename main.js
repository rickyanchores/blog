//NAV SLIDE FUNCTION
const navSlide = () =>{
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })
}

navSlide();


// APPLY Change THEME 
/*
const lightMode = () => {
    const navbar = document.querySelector('#navbar');
    const footer = document.querySelector('#footer');
    const logo = document.querySelector('.logo');

    logo.addEventListener('click', () => {
        document.body.style.background = "#333";
        document.body.style.color = "#ccc";
        navbar.style.background = "white";
        navbar.style.color = "black";
        footer.style.background = "white";
        footer.style.color = "black"
    });
    
}

lightMode();
*/