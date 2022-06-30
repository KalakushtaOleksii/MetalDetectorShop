const { User } = require('../../database/models')
const  md5 = require('md5')
const { responseService, } = require('../../services')
const jwt = require("jsonwebtoken");
const {accessTokenSecret} = require("../../configs/token-configs");


async function signUpController(reg, res) {
    const {
        firstName,
        lastName,
        dateOfBirth,
        email,
        password,
    } = reg.body

    try {
        await User.create({
            firstName,
            lastName,
            dateOfBirth,
            email,
            password: md5(password),
        })


        const result = await User.findOne({
            where: {
                email,
                password: md5(password),
            },
        })

       if (result){
            const accessToken = await jwt.sign({
                id: result.id,
                email: result.email,
                password: result.password,
            }, accessTokenSecret, { expiresIn: '24h' })

            res.json({
                accessToken
            })
        } else {
            res.send('Email or password incorrect')
           return res.status(400).json({message:'Email or password incorrect'})
        }

    } catch (e) {
        return res.status(400).json({message:'Email or password incorrect'})
    }
}


module.exports = signUpController