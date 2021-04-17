const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const movieController = require('../controllers/movies')

router.use(express.json())

router.get('/',(req,res)=>{
    // Forbidden acces
    res.sendStatus(403);
});

router.get('/favorite', verifyToken, movieController.getFavorite);

router.post('/favorite', [verifyToken, check('title').notEmpty()], movieController.addFavorite)

router.get('/:title',verifyToken, movieController.getMovie)

function verifyToken (req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = router;