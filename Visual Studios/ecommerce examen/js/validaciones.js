
    const form = document.getElementById('ventaForm');

    form.addEventListener('submit', event => {
        event.preventDefault();
        const inputs = form.querySelectorAll('input, select');
        let isValid = true;

        const validators = {
            email: val => /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(val),
            telefono: val => /^\d+$/.test(val),
            cantidad: val => Number(val) > 0 && Number.isInteger(Number(val)),
            precio: val => Number(val) > 0 && !isNaN(val),
            fecha_creacion: val => val.trim() !== ''
        };

        inputs.forEach(input => {
            input.classList.remove('is-valid', 'is-invalid');
            const value = input.value.trim();

            if (!value) {
                input.classList.add('is-invalid');
                isValid = false;
                return;
            }

           
            const validate = validators[input.id];
            if (validate && !validate(value)) {
                input.classList.add('is-invalid');
                isValid = false;
            } else {
                input.classList.add('is-valid');
            }
        });

    });
