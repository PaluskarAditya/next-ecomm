const express = require('express');
const conn = require('./db');
const app = express();
const cors = require('cors')
require('dotenv').config();
app.use(express.json());
app.use(cors());
conn();

// Test Request
app.get('/foo', (req, res) => res.send('bar'));

// Product Routes
app.use('/api/products', require('./routes/productRoutes'));

// User Routes
app.use('/api/user', require('./routes/userRoutes'));

// Review Routes
app.use('/api/post', require('./routes/reviewRoutes'));

app.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`));