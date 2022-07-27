const express = require('express');
const joi = require('joi');
const mysql = require('mysql2/promise');
const DB_CONFIG = require('../../config');
const isLoggedIn = require('../middleware/authorization');

const router = express.Router();

router.get('/', isLoggedIn, async (req, res) => {
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const [rows] = await connection.query(
      `SELECT * from accounts JOIN  groupes ON accounts.group_id=groupes.id
      where user_id = ?`,
      [req.userId],
    );
    await connection.end();
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post('/', isLoggedIn, async (req, res) => {
  try {
    const { groupId } = req.body;

    const connection = await mysql.createConnection(DB_CONFIG);
    const [response] = await connection.query('INSERT INTO accounts SET ?', {
      user_id: req.userId,
      group_id: groupId,
    });
    await connection.end();
    return res.json(response);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
