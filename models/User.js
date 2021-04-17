const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
    user_id : {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    name : {
        type: Sequelize.DataTypes.STRING,
    },
    password : {
        type: Sequelize.DataTypes.STRING,
    }
});

User.sync({ alter: true })
    .then(()=>console.log(`User table successfully created`))
    .catch((e)=>console.log(e))
;

module.exports = User;