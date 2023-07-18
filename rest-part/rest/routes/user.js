const express = require('express');
const {body} = require('express-validator');

const userController = require('../controllers/user');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// GET /user/status
router.get('/status', isAuth, userController.getUserStatus);

// PATCH /user/status
router.patch(
    '/status',
    isAuth,
    body('status').trim(),
    userController.updateUserStatus
);

module.exports = router;
