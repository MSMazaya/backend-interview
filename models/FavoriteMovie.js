const Sequelize = require('sequelize');
const User = require('./User')
const db = require('../config/database');

const FavoriteMovie = db.define('favorite_movies', {
    id : {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title : {
        type: Sequelize.DataTypes.STRING,
    },
    user_id : {
        type: Sequelize.DataTypes.UUID,
        references:{
            model: User,
            key:'user_id',
        }
    }
});

FavoriteMovie.sync({ alter: true })
    .then(()=>console.log(`FavoriteMovie table successfully created`))
    .catch((e)=>console.log(e)) 

module.exports = FavoriteMovie;