const mobileMenu = document.querySelector('#main-menu');
const burger = document.querySelector('.burger');
const anchorLinks = document.querySelectorAll('.anchor-link--mobile');

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    burger.classList.toggle('active');
});

anchorLinks.forEach((link) => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        burger.classList.remove('active');
    })
})



