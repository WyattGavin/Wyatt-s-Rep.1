const firstNameInput = document.getElementById("firstname_input");
const lastNameInput = document.getElementById("lastname_input");
const emailInput = document.getElementById("email_input");
const passwordInput = document.getElementById("password_input");

function validateName(input) {
    if (input.value === "") {
        input.style.border = '';
    } else {
        const validNameRegex = /^[A-Za-z\s'-]+$/;
        const isValidName = validNameRegex.test(input.value);
        input.style.border = isValidName ? '1px solid green' : '1px solid red';
    }
}

function validateEmail(input) {
    if (input.value === "") {
        input.style.border = '';
    } else {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
        input.style.border = isValidEmail ? '1px solid green' : '1px solid red';
    }
}

function validatePassword(input) {
    if (input.value === "") {
        input.style.border = '';
    } else {
        const isValidPassword = input.value.length >= 6;
        input.style.border = isValidPassword ? '1px solid green' : '1px solid red';
    }
}

if (firstNameInput && lastNameInput && emailInput && passwordInput) {
    firstNameInput.addEventListener("input", function() {
        validateName(firstNameInput);
    });

    lastNameInput.addEventListener("input", function() {
        validateName(lastNameInput);
    });

    emailInput.addEventListener("input", function() {
        validateEmail(emailInput);
    });

    passwordInput.addEventListener("input", function() {
        validatePassword(passwordInput);
    });
}