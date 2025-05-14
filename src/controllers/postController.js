const pool = require('../db/db');

const listarPosts = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM posts');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const listarPost = async (req, res) => {
    const { id } = req.params;
    
    try {
        const result = await pool.query(`SELECT * FROM posts WHERE id = ${id}`);
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listarPosts,
    listarPost,
};