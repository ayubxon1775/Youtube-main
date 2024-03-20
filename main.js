const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains('open')
    menuBtnIcon.setAttribute('class',isOpen? 'ri-close-line' : 'ri-menu-line');
})

navLinks.addEventListener('click', (e) =>{
    navLinks.classList.remove('open');
    menuBtnIcon.setAttribute('class', "ri-menu-line");
});

const downloadCv = document.getElementById('download-cv')

downloadCv.addEventListener('click', (e)=>{
    const aElement = document.createElement('a');
    aElement.setAttribute('download', 'CV.pdf');
    aElement.setAttribute('href', '/assets/CV.pdf');
    aElement.click();
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal('.header__container h4',{
    ...scrollRevealOption,
});
ScrollReveal().reveal('.header__container h1',{
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal('.header__container .section__description',{
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal('.header__container .header__btns',{
    ...scrollRevealOption,
    delay: 1500,
});














