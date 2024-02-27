const skillsSection = document.querySelector('#skills');

skillsSection.addEventListener('click', (e) => {
    if (e.target.closest('.button-action')) {
        e.target.closest('.skills-card').classList.add('active');
    }

    if (e.target.closest('.skills-card__close')) {
        e.target.closest('.skills-card').classList.remove('active');
    }
})

