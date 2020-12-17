const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: '',
    password: '',
    database: 'products',
    port: '5432'
});

const getProducts = async (req, res) => {
    const response = await pool.query('SELECT * FROM products');
    console.log(response.rows);
    res.status(200).json(response.rows);
}

module.exports  = {
    getProducts
}
