const User = require('../models/User.Model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
exports.register = async (req,res,next) => {
    try{
        const user = await User.create(req.body)
        const token = jwt.sign({userId: user._id}, process.env.APP_SECRET);
        res.status(200).json({
            token, userName: user.name
        })
    }catch(error){
        res.json(error)
    }
}

exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email}) //kiểm tra email
        if(!user){
            const err = new Error('Email is not correct');
            err.statusCode = 400
            return next(err)
        }
        if(bcrypt.compareSync(req.body.password, user.password)){ // so sánh pw user nhập vào và pw (hash) in db
            const token = jwt.sign({userId: user._id}, process.env.APP_SECRET)
            res.status(200).json({
                token, userName: user.name
            })
        } else {
            const err = new Error('Password is not correct');
            err.statusCode = 400
            return next(err)
        }
        
    } catch (error) {
        res.json(error)
    }
}

exports.getCurrentUser = async (req, res, next) => {
    try {
        const data = { user: null }
        if(req.user){
            const user = await User.findOne({_id: req.user.userId})
            data.user = {userName: user.name}
        }
        res.status(200).json({
            status: 'success',
            data: data
        })
    } catch (error){
        res.json(error)
    }
}