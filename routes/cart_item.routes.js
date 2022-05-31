const addCartItemController  = require('../controllers/cart_item/add-cart-item.controller')
const cartItemListController =  require('../controllers/cart_item/cart-item-list.controller')
const deleteItemFromCart = require('../controllers/cart_item/delete-item-from-cart.controller')

function initCartItemRoutes(app){
    app.post('/add_cart_item', addCartItemController)

    app.get('/cart_item_list', cartItemListController)
    app.post('/delete_item_from_cart', deleteItemFromCart)
}

module.exports = initCartItemRoutes