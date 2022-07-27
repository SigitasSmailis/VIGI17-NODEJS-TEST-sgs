const express = require('express');
const joi = require('joi');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const DB_CONFIG = require('../../config');

const router = express.Router();

const authSchema = joi.object({
  fullName: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().min(4).required(),
});

const authSchemaL = joi.object({
  email: joi.string().required(),
  password: joi.string().min(4).required(),
});

router.post('/register', async (req, res) => {
  const { full_name: fullName, email, password } = req.body;
  try {
    await authSchema.validateAsync({ fullName, email, password });
  } catch (err) {
    return res.status(400).json(err);
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const connection = await mysql.createConnection(DB_CONFIG);

    const [rows] = await connection.query(
      `SELECT * FROM users WHERE email="${email}"`,
    );
    if (rows.length > 0) {
      return res.status(400).json({
        status: 'Bad Request!',
        error: 'User already exists!',
      });
    }
    const [response] = await connection.query('INSERT INTO users SET ?', {
      full_name: fullName,
      email,
      password: hashedPassword,
    });
    await connection.end();

    return res.json({
      db: response,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    await authSchemaL.validateAsync({ email, password });
  } catch (err) {
    return res.status(400).json(err);
  }
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const [user] = await connection.query(
      `SELECT * FROM users WHERE email="${email}" `,
    );
    if (user.length === 0) {
      return res
        .status(400)
        .json({ status: 'Bad Request!', error: 'User not found!' });
    }
    const compare = await bcrypt.compare(password, user[0].password);
    if (!compare) {
      return res
        .status(400)
        .json({ status: 'Bad Request!', error: 'Password is incorrect!' });
    }

    await connection.end();
    const token = jwt.sign(
      {
        id: user[0].id,
        email,
      },
      process.env.JWT_SECRET,
    );
    return res.json({
      user: {
        id: user[0].id,
      },
      token,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
