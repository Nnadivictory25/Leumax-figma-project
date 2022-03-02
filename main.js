const navToggle = document.querySelector('.navbarToggler');
const nav = document.querySelector('nav');
const closeNav = document.querySelector('#closeNav');




navToggle.addEventListener("click", () => {
    nav.classList.toggle('open');
    navToggle.style.display = "none";
    closeNav.style.display = "block"
}

)

closeNav.addEventListener("click", () => {
    nav.classList.toggle('open');
    navToggle.style.display = "block";
    closeNav.style.display = "none"
}

)
