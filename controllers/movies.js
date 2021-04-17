
const jwt = require('jsonwebtoken');
const getPoster = require('./getPoster');
const FavoriteMovie = require('../models/FavoriteMovie');
const {validationResult} = require('express-validator');

exports.getFavorite = (req,res)=>{
    jwt.verify(req.token, process.env.JWT_SECRET, async (err, authData) => {
        if(err){
            res.status(403).send({msg:err})
        } else {
            movies = await FavoriteMovie.findAll({
                where:{
                    user_id:authData.user_id
                }
            })
            poster_urls = []
            for(var i=0;i<movies.length;i++){
                movie_title = movies[i].title
                url = await getPoster(movies[i].title)
                // temp added to format {movie_title, url}
                temp = {}
                temp[movie_title] = url 
                poster_urls.push(temp)
            }
            res.status(200).json(poster_urls);
        }
    })
}

exports.addFavorite = (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    jwt.verify(req.token, process.env.JWT_SECRET, async (err, authData) => {
        if(err){
            res.status(403).send({msg:err})
        } else {
            const title = req.body.title
            FavoriteMovie.create({title, user_id:authData.user_id})
                .then(()=>res.status(201).send())
                .catch((e)=>res.status(500).send(e))
            res.json(movie);
        }
    })
}

exports.getMovie = async (req,res)=>{
    jwt.verify(req.token, process.env.JWT_SECRET, async (err, authData) => {
        if(err){
            res.status(403).send({msg:err})
        } else {  
            try {
                url = await getPoster(req.params.title)
                res.status(200).json({poster:url});
            } catch(err) {
                res.status(400).send(err)  
            }
        }
    })
}

