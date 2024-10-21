 // This is a simple in-memory database for demonstration purposes.
// In a real-world application, you would use a proper database like MongoDB or PostgreSQL.

const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
];

function authenticateUser(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(u => u.username === username && u.password === password);
            resolve(user || null);
        }, 1000); // Simulating database delay
    });
}

module.exports = {
    authenticateUser,
};