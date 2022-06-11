const { User } = require('../../database/models')
const { responseService } = require('../../services')
const jwt = require('jsonwebtoken')
const md5 = require("md5");
const { accessTokenSecret } = require('../../configs/token-configs')


async function userLoginController(reg, res){
    const {email,
        password,
    } = reg.body

    const result = await User.findOne({
        where: {
            email,
            password,
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
        res.send('Email or password incorrect')
    }
}



module.exports = userLoginController