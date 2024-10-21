document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const message = document.getElementById('message');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                message.textContent = 'Login successful!';
                message.style.color = 'green';
                loginForm.reset();
                // Redirect to the main page or dashboard
                setTimeout(() => {
                    window.location.href = '/index.html';
                }, 1500);
            } else {
                message.textContent = data.message || 'Login failed. Please try again.';
                message.style.color = 'red';
                loginForm.classList.add('shake');
                setTimeout(() => {
                    loginForm.classList.remove('shake');
                }, 500);
            }
        } catch (error) {
            console.error('Error:', error);
            message.textContent = 'An error occurred. Please try again later.';
            message.style.color = 'red';
        }
    });
});