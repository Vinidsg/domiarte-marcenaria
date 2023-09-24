document.addEventListener('DOMContentLoaded', function () {
    const telefoneInput = document.getElementById('telefone');
    
    telefoneInput.addEventListener('input', function (event) {
        const input = event.target;
        const numericValue = input.value.replace(/\D/g, '');
        input.value = formatPhoneNumber(numericValue); 
    });

    function formatPhoneNumber(number) {
        if (number.length > 2) {
            return `(${number.slice(0, 2)}) ${number.slice(2, 7)}-${number.slice(7, 11)}`;
        } else if (number.length > 0) {
            return `(${number.slice(0, 2)}) ${number.slice(2)}`;
        } else {
            return number;
        }
    }
});

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (!emailPattern.test(emailInput.value)) {
        emailError.innerText = 'Endereço de e-mail inválido';
        return false;
    } else {
        emailError.innerText = '';
        return true;
    }
}

function validateForm() {
    const isTelefoneValid = validateTelefone();
    const isEmailValid = validateEmail();

    if (!isTelefoneValid || !isEmailValid) {
        return false; 
    }

    return true;
}