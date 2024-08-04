document.addEventListener('DOMContentLoaded', () => {
    const loginValidation = () => {
        document.getElementById('validationForm').addEventListener('submit', (event) => {
            const password = document.getElementById('exampleInputPassword1').value;
            const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,8}$/;

            if (!passwordPattern.test(password)) {
                alert('Password must be 6-8 characters long and contain both letters and digits.');
                event.preventDefault();
                return;
            }
        });
    };
    loginValidation();
});


document.addEventListener('DOMContentLoaded', () => {
    const signinValidation = () => {
        document.getElementById('validationForm').addEventListener('submit', (event) => {
            const password = document.getElementById('exampleInputPassword1').value;
            const confirmPassword = document.getElementById('exampleInputPassword2').value;
            const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,8}$/;

            if (!passwordPattern.test(password)) {
                alert('Password must be 6-8 characters long and contain both letters and digits.');
                event.preventDefault();
            } else if (password !== confirmPassword) {
                alert('Passwords do not match.');
                event.preventDefault();
            }
        });
    };
    signinValidation();
});
