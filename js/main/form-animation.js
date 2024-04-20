const inputsForm = document.querySelectorAll(".form-application__input");

inputsForm.forEach(input => {
    const formItem = input.closest('.form-application__item');
    const placeholder = formItem.querySelector('.form-application__placeholder');
    input.addEventListener('focus', () => {
        placeholder.classList.add('focus');
    })

    input.addEventListener('blur', () => {
        if (input.value.trim() < 1) {
            placeholder.classList.remove('focus');
        }
    })
})
