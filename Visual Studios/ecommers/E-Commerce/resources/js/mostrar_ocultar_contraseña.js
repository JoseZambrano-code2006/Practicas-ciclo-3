function setupPasswordToggle(buttonId, inputId) {
    document.getElementById(buttonId).addEventListener('click', function () {
        const input = document.getElementById(inputId);
        const icon = this.querySelector('i');

        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.replace('fa-eye', 'fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.replace('fa-eye-slash', 'fa-eye');
        }
    });
}

setupPasswordToggle('toggle-card-number', 'card-number');
setupPasswordToggle('toggle-cvc', 'card-cvc');

function setupPasswordToggle(buttonId, inputId) {
    const button = document.getElementById(buttonId);
    const input = document.getElementById(inputId);

    if (button && input) {
        button.addEventListener('click', function () {
            const icon = this.querySelector('i');

            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.replace('fa-eye', 'fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.replace('fa-eye-slash', 'fa-eye');
            }
        });
    }
}

setupPasswordToggle('toggle-contraseña-login', 'contraseña-login');
setupPasswordToggle('toggle-contraseña', 'contraseña');