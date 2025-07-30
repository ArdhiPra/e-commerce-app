const ProductModel = require('../models/productModel');

const ProductController = {
    getAll: async (req, res) => {
        const products = await ProductModel.getAll();
        res.json(products);
    },

    getById: async (req, res) => {
        const product = await ProductModel.getById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    },

    create: async (req, res) => {
        const id = await ProductModel.create(req.body);
        res.status(201).json({ id, ...req.body });
    },

    update: async (req, res) => {
        await ProductModel.update(req.params.id, req.body);
        res.json({ message: 'Product updated' });
    },

    delete: async (req, res) => {
        await ProductModel.delete(req.params.id);
        res.json({ message: 'Product deleted' });
    }
};

module.exports = ProductController;
