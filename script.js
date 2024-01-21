const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB (make sure you have MongoDB installed locally or use a cloud service)
mongoose.connect('mongodb://localhost:27017/waterSaverDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a User schema
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public')); // Create a 'public' folder for your HTML, CSS, and client-side scripts

// Serve HTML pages
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/register.html');
});

app.get('/dashboard', (req, res) => {
    res.sendFile(__dirname + '/public/dashboard.html');
});

// Your routes go here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
