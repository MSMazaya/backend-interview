const User = require('../models/User');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); 
const {validationResult} = require('express-validator');

exports.login = async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    // querying user
    try {
            users = await User.findAll({
            where:{
                name:req.body.name
            }
        })
    }
    catch(error) {
        res.status(403).json({error})
    }
    
    // validate user
    var user;
    for(var i = 0;i<users.length;i++){
        try {
            encrypt_result = await bcrypt.compare(req.body.password, users[i].toJSON().password)
            if(encrypt_result){
                user = users[i].toJSON();
            }
        } catch(err) {
            console.log(err)
        }
    }

    if(user){   
        const accessToken = generateAccessToken({user_id:user.user_id});
        // generate random dummy session_id
        session_id = crypto.randomBytes(20).toString("hex");
        res.cookie('session_id',session_id);
        res.json({ accessToken });
    } else {
        res.status(400).send({msg:"user not found"})
    }
}


exports.signin = async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { name: req.body.name, password: hashedPassword }
        // Create user
        User.create(user)
            .then(()=>res.status(201).json({msg:"Signed in successfully"}))
            .catch((error)=>res.status(500).json(error))
    } catch(error) {
        res.status(500).json(error)
    }
}

function generateAccessToken(user) {
    return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '30m' })
}