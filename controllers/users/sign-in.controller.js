const { User } = require('../../database/models')
const { responseService } = require('../../services')
const md5 = require('md5')
const jwt = require("jsonwebtoken");
const {accessTokenSecret} = require("../../configs/token-configs");

async function signInController(req, res) {
    const {
        email,
        password,
    } = req.body

    const result = await User.findOne({
        where: {
            email,
            password: md5(password),
        },
    })

    if (result){
        const accessToken = jwt.sign({
            id: result.id,
            email: result.email,
            password: result.password,
        }, accessTokenSecret, { expiresIn: '24h' })

        res.json({
            accessToken
        })
    } else {
        return res.status(400).json({message:'Email or password incorrect'})
    }
}

module.exports = signInController