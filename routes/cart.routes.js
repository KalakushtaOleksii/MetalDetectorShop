const addCartController  = require('../controllers/cart/add-cart.controller')
const orderListController =  require('../controllers/cart/order-list.controller')
const closeCartController = require('../controllers/cart/close-cart.controller')


function initCartRoutes(app){
    app.post('/add_cart/', addCartController)

    //app.get('/get_cart', getCartController)
    app.get('/close_cart/:id', closeCartController)
    app.post('/get_orders', orderListController)
}

module.exports = initCartRoutes