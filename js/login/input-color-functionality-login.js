const emailInput = document.getElementById("email_input");
const passwordInput = document.getElementById("password_input");

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

if (emailInput && passwordInput) {
    emailInput.addEventListener("input", function() {
        validateEmail(emailInput);
    });

    passwordInput.addEventListener("input", function() {
        validatePassword(passwordInput);
    });
}