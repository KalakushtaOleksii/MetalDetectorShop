const jwt = require('jsonwebtoken')
const {accessTokenSecret} = require('../configs/token-configs')


function getUserTokenMiddleware( reg, res, next){
    if (reg.method === 'OPTIONS'){
        next()
    }
    try {
        const token = reg.headers.authorization.split(' ')[1]
        if (!token){
            return res.status(483).json({message: 'Користувач не авторизований 10'})
        }
        const decodedData = jwt.verify(token, accessTokenSecret)
        reg.user = decodedData
        next()

    } catch (e){
        return res.status(483).json({message: 'Користувач не авторизований 20'})
    }



}


module.exports = getUserTokenMiddleware