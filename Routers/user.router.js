const express = require('express');
const userController = require('../Controllers/users.controller');
const router = express.Router();

router.get('/users', userController.getUsers);

module.exports = router;
