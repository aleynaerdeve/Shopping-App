const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');
const data = require('./data'); // data.js dosyasını dahil edin

const app = express();

app.use(bodyParser.json());

// Login route
app.post('/login', authMiddleware);

// Use the authMiddleware for other routes
app.use(authMiddleware);

// Example products and categories routes
app.get('/products', (req, res) => {
    res.json(data.products); // data.js dosyasındaki ürünleri döndürün
});

app.post('/products', (req, res) => {
    res.json({ message: "Product added" });
});

app.get('/categories', (req, res) => {
    res.json(data.categories); // data.js dosyasındaki kategorileri döndürün
});

app.post('/categories', (req, res) => {
    res.json({ message: "Category added" });
});

const PORT = process.env.PORT || 3500; // Farklı bir port seçin
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
