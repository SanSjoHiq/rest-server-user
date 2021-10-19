const express = require('express');
const userController = require('../Controllers/users.controller');
const router = express.Router();

router.get('/users', userController.getUsers);
router.post('/users', userController.postUser);

module.exports = router;
