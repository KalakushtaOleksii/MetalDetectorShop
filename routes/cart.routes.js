const addCartController  = require('../controllers/cart/add-cart.controller')
const orderListController =  require('../controllers/cart/order-list.controller')
const closeCartController = require('../controllers/cart/close-cart.controller')
const getCartController = require('../controllers/cart/get-cart.controller')
const getUserTokenMiddleware = require("../middlewaress/get-user-token.middleware");


function initCartRoutes(app){
    app.post('/add_cart/', addCartController)
    app.post('/get_cart', getCartController)
    app.get('/close_cart/:id', closeCartController)
    app.get('/get_orders', getUserTokenMiddleware, orderListController)
}

module.exports = initCartRoutes