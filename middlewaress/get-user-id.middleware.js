function getUserIdMiddleware(reg,res, next){
    const userId = Number(reg.header('User-Id'))

    reg.userId = userId

    next()
}

module.exports = getUserIdMiddleware