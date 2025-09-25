const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'db',  // PostgreSQL service name in Docker
  database: 'realtime_db',
  password: 'postgres',
  port: 5432,
});

// Create a new user
router.post('/', async (req, res) => {
  const { name, role } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (name, role) VALUES ($1, $2) RETURNING *',
      [name, role]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;

