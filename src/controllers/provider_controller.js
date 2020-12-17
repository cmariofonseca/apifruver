const { Pool } = require('pg');

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

const getProviders = async (req, res) => {
    const response = await pool.query('SELECT * FROM providers');
    res.status(200).json(response.rows);
}

const getProviderById = async (req, res) => {
    const id_provider = req.params.id;
    const response = await pool.query('SELECT * FROM providers WHERE id_provider = $1', [ id_provider ]);
    res.status(200).json(response.rows);
}

const createProvider = async (req, res) => {
    const id_provider = Math.floor(Math.random()*90000) + 10000;
    const { name, address, telephone } = req.body;
    pool.query(
        'INSERT INTO providers (id_provider, name, address, telephone) VALUES ($1, $2, $3, $4)',
        [ id_provider, name, address, telephone ]
    );
    res.json({
        message: 'Provider added successfully',
        body: {
            provider: { id_provider, name, address, telephone }
        }
    });
}

const deleteProvider = async (req, res) => {
    const id_provider = req.params.id;
    pool.query('DELETE FROM providers WHERE id_provider = $1', [ id_provider ]);
    res.json(`Provider id ${id_provider}, has been deleted successfully.`);
}

const updateProvider = async (req, res) => {
    const id_provider = req.params.id;
    const { name, address, telephone } = req.body;
    pool.query(
        'UPDATE providers SET name = $1, address = $2, telephone = $3 WHERE id_provider = $4',
        [ name, address, telephone, id_provider ]
    );
    res.json(`Provider id ${id_provider}, has been updated successfully.`);
}

module.exports  = {
    getProviders,
    getProviderById,
    createProvider,
    deleteProvider,
    updateProvider
}
