const path = require('path');

const express = require('express');

const userController = require('../controllers/user');
const router = express.Router();

router.get('/add-user', userController.getAddUser);
router.get('/users', userController.getUsers);

router.post('/add-user', userController.postAddUser);

router.post('/delete-user', userController.postDeleteUser);

module.exports = router;
