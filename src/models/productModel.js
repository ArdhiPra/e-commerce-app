const pool = require('../config/db');

const ProductModel = {
    getAll: async () => {
        const [rows] = await pool.execute('SELECT * FROM products');
        return rows;
    },

    getById: async (id) => {
        const [rows] = await pool.execute('SELECT * FROM products WHERE id = ?', [id]);
        return rows[0];
    },

    create: async ({ name, price, stock }) => {
        const [result] = await pool.execute(
            'INSERT INTO products (name, price, stock) VALUES (?, ?, ?)',
            [name, price, stock]
        );
        return result.insertId;
    },

    update: async (id, { name, price, stock }) => {
        await pool.execute(
            'UPDATE products SET name = ?, price = ?, stock = ? WHERE id = ?',
            [name, price, stock, id]
        );
    },

    delete: async (id) => {
        await pool.execute('DELETE FROM products WHERE id = ?', [id]);
    }
};

module.exports = ProductModel;
