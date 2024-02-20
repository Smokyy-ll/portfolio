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

// 1.Найти все сыылки в переменной
// 2.Перебрать сcылки через forEach и на каждую повесить click
// 3.Снимать класс open по клику на ссылку

