const { Pool } = require('pg');
const router = require('../routes/route');

const pool = new Pool({
    host: 'localhost',
    // user: '',
    user: 'postgres',
    // password: '',
    password: 'Pstgrsql21#',
    // database: '',
    database: 'apifruver',
    port: '5432'
});

const getProducts = async (req, res) => {
    const response = await pool.query('SELECT * FROM products');
    res.status(200).json(response.rows);
}

const createProduct = async (req, res) => {
    const id_product = Math.floor(Math.random()*90000) + 10000;
    console.log(id_product);
    const { name, measure, category, price, amount, description } = req.body;
    const response = await pool.query(
        'INSERT INTO products(id_product, name, measure, category, price, amount, description) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [ id_product, name, measure, category, price, amount, description ]
    );
    res.send('Product created');
}

const getProviders = async (req, res) => {
    const response = await pool.query('SELECT * FROM providers');
    res.status(200).json(response.rows);
}

const createProvider = async (req, res) => {
    const id_provider = Math.floor(Math.random()*90000) + 10000;
    console.log(id_provider);
    const { name, address, telephone } = req.body;
    const response = await pool.query(
        'INSERT INTO providers(id_provider, name, address, telephone) VALUES ($1, $2, $3, $4)',
        [ id_provider, name, address, telephone ]
    );
    res.send('Provider created');
}

module.exports  = {
    getProducts,
    createProduct,
    getProviders,
    createProvider
}
