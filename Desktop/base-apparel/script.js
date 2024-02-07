const form = document.getElementById('form');
const input = document.getElementById('input');
const inputContainer = document.querySelector('.input_container');

const msg = 'Please provide a valid email';
const msg2 = 'Email you enter is incorrect';
const svgContent = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="none" fill-rule="evenodd"><circle cx="12" cy="12" r="12" fill="#F96464"/><path fill="#FFF" fill-rule="nonzero" d="M13.256 6v9.056h-2V6h2zm-.944 12.464c-.384 0-.699-.104-.944-.312a1.027 1.027 0 0 1-.368-.824c0-.33.125-.608.376-.832.25-.224.563-.336.936-.336.373 0 .68.112.92.336.24.224.36.501.36.832 0 .341-.117.616-.352.824-.235.208-.544.312-.928.312z"/></g></svg>';

function createErrorMessage (message) {
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error_container');

    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error_message')
    errorMessage.textContent = message;
    errorContainer.appendChild(errorMessage);
    return errorContainer;
}

function clearMessages() {
    const existingErrorMessages = document.querySelectorAll('.error_container');
    existingErrorMessages.forEach(message => message.remove());
}

function createErrorIcon(icon) {
    const errorIcon = document.createElement('span');
    errorIcon.classList.add('error_icon');
    errorIcon.innerHTML = icon;
    return errorIcon;
}

function clearErrorIcon() {
    const existingErrorIcon = document.querySelectorAll('.error_icon');
    existingErrorIcon.forEach(icon => icon.remove());
}

function clearErrorOnFocus() {
    clearMessages();
    clearErrorIcon();
    input.style.border = '';
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearMessages();
    clearErrorIcon();

    if (input.value === '') {
        const errorIcon = createErrorIcon(svgContent);
        input.parentNode.appendChild(errorIcon);
        const errorMessage = createErrorMessage(msg);
        input.parentNode.appendChild(errorMessage);
        input.style.border = '2px solid hsl(0, 93%, 68%)';
    } else if (!isValidEmail(input.value)) {
        const errorIcon = createErrorIcon(svgContent);
        input.parentNode.appendChild(errorIcon);
        const errorMessage = createErrorMessage(msg2);
        input.parentNode.appendChild(errorMessage);
        input.style.border = '2px solid hsl(0, 93%, 68%)';
    } else {
        input.style.border = '';
    }
})

input.addEventListener('focus', clearErrorOnFocus);

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
}
