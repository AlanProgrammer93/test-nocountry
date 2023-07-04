const express = require('express')

const { login, createTask } = require('../controllers/auth')

const router = express.Router();

router.post('/login', login);
router.post('/task', createTask);

module.exports = router;
