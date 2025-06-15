const pool = require('../db/db');

const listarUsers = async (req, res, next) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const listarUser = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    listarUsers,
    listarUser
}