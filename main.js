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

// themeButton 1 (turn TEAL)

const tealTheme1 = () => {
    //button custom
    const themeBtn = document.querySelector('.themeButton');
    // Nav and Footer and Logo
    const navbar = document.querySelector('#navbar');
    const footer = document.querySelector('#footer');
    const logo = document.querySelector('.logo');
    const logoFooter = document.querySelector('.logo-footer');

    // Add Event 
    themeBtn.addEventListener('click', () => {

        navbar.style.background = "whitesmoke";
        navbar.style.color = "teal";
        footer.style.background = "whitesmoke";
        footer.style.color = "teal";
        logo.style.background = "whitesmoke";
        logo.style.color = "teal";
        logo.style.borderColor = "teal";
        logoFooter.style.color = "teal";
        logoFooter.style.borderColor = "teal";
    })
}

tealTheme1();
// themeButton 2 (turn Normal)

const tealTheme2 = () => {
    //button custom
    const themeBtn = document.querySelector('.themeButton2');
    // Nav and Footer and Logo
    const navbar = document.querySelector('#navbar');
    const footer = document.querySelector('#footer');
    const logo = document.querySelector('.logo');
    const logoFooter = document.querySelector('.logo-footer');

    // Add Event 
    themeBtn.addEventListener('click', () => {

        navbar.style.background = "";
        navbar.style.color = "";
        footer.style.background = "";
        footer.style.color = "";
        logo.style.background = "";
        logo.style.color = "";
        logo.style.borderColor = "";
        logoFooter.style.color = "";
        logoFooter.style.borderColor = "";
    })
}

tealTheme2();