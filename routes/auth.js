const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth')
const {check} = require('express-validator');
const cookieParser = require('cookie-parser');
router.use(express.json());

// cookie parser
router.use(cookieParser())

router.post('/signin',[
    check('name').notEmpty(),
    check('password').notEmpty(),
], authController.signin)

router.post('/login',[
    check('name').notEmpty(),
    check('password').notEmpty(),
], authController.login)


module.exports = router;