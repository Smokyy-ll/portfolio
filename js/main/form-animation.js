const inputsForm = document.querySelectorAll(".form-application__input");

inputsForm.forEach(input => {
    input.addEventListener('focus', () => {
        const formItem = input.closest('.form-application__item');
        const placeholder = formItem.querySelector('.form-application__placeholder');
        placeholder.classList.add('focus');
    })
});
