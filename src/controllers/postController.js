const pool = require("../db/db");

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
        const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const criarPost = async(req, res) => {
    const { titulo, conteudo } = req.body;

    try {
        const result = await pool.query("INSERT INTO posts (titulo, conteudo) VALUES ($1, $2)", [titulo, conteudo]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deletarPost = async(req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query(`DELETE FROM posts WHERE id = $1`, [id]);
        res.status(200).json({ message: 'Post deletado com sucesso!' });
    } catch (error){
        res.status(500).json({ error: error.message });
    }
}

const editarPost = async(req, res) => {
    const { id } = req.params;
    const { titulo, conteudo } = req.body;

    try {
        const result = await pool.query('UPDATE posts SET titulo = $1, conteudo = $2 WHERE id = $3', [titulo, conteudo, id]);
        res.status(200).json({ message: 'Post editado com sucesso!'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listarPosts,
    listarPost,
    criarPost,
    deletarPost,
    editarPost
};