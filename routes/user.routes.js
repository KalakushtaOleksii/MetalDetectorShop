const {
    signUpController,
    signInController,
    userLoginController,
    userTokenListController,
} = require('../controllers/users')
const getUserTokenMiddleware = require('../middlewaress/get-user-token.middleware')

function initUserRoutes(app) {
    app.post('/sign-up', signUpController)

    app.post('/sign-in', signInController)

    app.post('/login', userLoginController)

    app.get('/me', getUserTokenMiddleware, userTokenListController)
}

module.exports = initUserRoutes