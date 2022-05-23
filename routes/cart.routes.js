const addCartController  = require('../controllers/cart/add-cart.controller')
const cartListController =  require('../controllers/cart/cart-list.controller')


function initCartRoutes(app){
    app.post('/add_cart', addCartController)

    app.get('/cart_list', cartListController)
}

module.exports = initCartRoutes