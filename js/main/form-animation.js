const form = document.querySelector('#form');

const animationPlaceholder = (e) => {
    const inputElement = e.target.closest('[data-input]');
    if (inputElement) {
        const formElement = inputElement.closest('[data-form-element]');
        const fakePlaceholder = formElement.querySelector('[data-fake-placeholder]');
        fakePlaceholder.classList.add('focus');
        if (inputElement.id === 'message') {
            inputElement.classList.add('focus');
        }
        inputElement.addEventListener('blur', removeFocusFromPlaceholder);
    }
}

const removeFocusFromPlaceholder = (e) => {
    const inputElement = e.target.closest('[data-input]');
    if (inputElement) {
        const formElement = inputElement.closest('[data-form-element]');
        const fakePlaceholder = formElement.querySelector('[data-fake-placeholder]');
        if (inputElement.value.length < 1) {
            fakePlaceholder.classList.remove('focus');
            if (inputElement.id === 'message') {
                inputElement.classList.remove('focus');
            }
        }
        inputElement.removeEventListener('blur', removeFocusFromPlaceholder);
    }
}

form.addEventListener('click', animationPlaceholder);
