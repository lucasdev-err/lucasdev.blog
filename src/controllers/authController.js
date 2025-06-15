const pool = require("../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/env");


const loginUser = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = result.rows[0];

        if (!user) return res.status(401).json({ error: 'Usuario nao encontrado.' });

        const isValid = await bcrypt.compare(senha, user.senha);

        if (!isValid) return res.status(401).json({ error: 'Senha invalida.' });

        const token = jwt.sign({ userId: user.id }, config.jwt.secret, { expiresIn: 300});

        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: 'Erro no login' });
    }
}

module.exports = {
    loginUser,
}