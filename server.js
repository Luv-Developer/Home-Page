const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { authenticateUser } = require('./database');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await authenticateUser(username, password);
        if (user) {
            res.json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});