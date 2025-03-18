const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Express server!' });
});

// Define port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
