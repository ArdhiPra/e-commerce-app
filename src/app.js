require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json()); // Middleware untuk parsing JSON body

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Rute untuk setiap modul

// Rute dasar
app.get("/", (req, res) => {
  res.send("Welcome to the E-commerce API!");
});

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access API at http://localhost:${PORT}/api`);
});
