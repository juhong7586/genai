const express = require('express');
const app = express();

// Middleware setup
app.use(express.json());

// Route setup
app.use('/users', require('./routes/userRoutes'));

module.exports = app;