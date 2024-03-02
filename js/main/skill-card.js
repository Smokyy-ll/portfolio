const skillsSection = document.querySelector('#skills');
const fadeBlock = document.querySelector('.fade-block');

skillsSection.addEventListener('click', (e) => {
    if (e.target.closest('.button-action')) {
        e.target.closest('.skills-card').classList.add('active');
        fadeBlock.classList.add('open');
    }

    if (e.target.closest('.skills-card__close')) {
        e.target.closest('.skills-card').classList.remove('active');
        fadeBlock.classList.remove('open');
    }


})

