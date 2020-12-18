const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: '',
    // user: 'postgres',
    password: '',
    // password: 'Pstgrsql21#',
    database: '',
    // database: 'apifruver',
    port: '5432'
});

const getProducts = async (req, res) => {
    const response = await pool.query('SELECT * FROM products');
    res.status(200).json(response.rows);
}

const getProductById = async (req, res) => {
    const id_product = req.params.id;
    const response = await pool.query(
        'SELECT * FROM products WHERE id_product = $1',
        [ id_product ]
    );
    res.status(200).json(response.rows);
}

const createProduct = async (req, res) => {
    const id_product = Math.floor(Math.random()*90000) + 10000;
    const { name, measure, category, price, amount, description } = req.body;
    pool.query(
        'INSERT INTO products (id_product, name, measure, category, price, amount, description) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [ id_product, name, measure, category, price, amount, description ]
    );
    res.json({
        message: 'Product added successfully',
        body: {
            product: { id_product, name, measure, category, price, amount, description }
        }
    });
}

const deleteProduct = async (req, res) => {
    const id_product = req.params.id;
    const response = await pool.query(
        'DELETE FROM products WHERE id_product = $1',
        [ id_product ]
    );
    res.json(`Product id ${id_product}, has been deleted successfully.`);
}

const updateProduct = async (req, res) => {
    const id_product = req.params.id;
    const { name, price, amount } = req.body;
    pool.query(
        'UPDATE products SET name = $1, price = $2, amount = $3 WHERE id_product = $4',
        [ name, price, amount, id_product ]
    );
    res.json(`Product id ${id_product}, has been updated successfully.`);
}

module.exports  = {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct
}
