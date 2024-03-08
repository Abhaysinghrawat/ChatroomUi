document.getElementById('signinForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessageElement = document.getElementById('error-message');

    try {
        const response = await fetch('https://node-and-socket-project.onrender.com/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        console.log({ username, password })
        console.log(response)
        if (response.ok) {
            const response = await fetch('https://node-and-socket-project.onrender.com/chatroom').then(() => {
                window.location.href = 'https://node-and-socket-project.onrender.com/chatroom';
                // console.log(username)
                // localStorage.setItem('username', username);
                // console.log(localStorage.getItem('username'));
                
            });
        } else {
            alert(response.body);
            const errorData = await response.json();
            errorMessageElement.textContent = errorData.message;
        }
    } catch (error) {
        console.error('Error:', error);
        errorMessageElement.textContent = 'An error occurred while signing in. Please try again later.';
    }
});

const passwordInput = document.getElementById('password');
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Show';
toggleButton.type = 'button';
toggleButton.id = 'togglePassword';
passwordInput.insertAdjacentElement('afterend', toggleButton);
toggleButton.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        toggleButton.textContent = 'Show';
    }
});
