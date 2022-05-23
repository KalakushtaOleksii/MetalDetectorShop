const addCartItemController  = require('../controllers/cart_item/add-cart-item.controller')
const cartItemListController =  require('../controllers/cart_item/cart-item-list.controller')


function initCartItemRoutes(app){
    app.post('/add_cart_item', addCartItemController)

    app.get('/cart_item_list', cartItemListController)
}

module.exports = initCartItemRoutes