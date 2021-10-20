const express = require('express');
const userController = require('../Controllers/users.controller');
const router = express.Router();

router.get('/users', userController.getUsers);
router.get('/users/:_id', userController.getUser);
router.post('/users', userController.postUser);

module.exports = router;
