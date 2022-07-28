document.getElementById('login-button').addEventListener('click', function () {

    const emailField = document.getElementById('user-email')
    const userEmil = emailField.value

    const passwordField = document.getElementById('user-password')
    const userPassword = passwordField.value

    if (userEmil == 'misterhoque14@gmail.com' && userPassword == 'kingkhan') {
        window.location.href = 'banking.html'
    }
})