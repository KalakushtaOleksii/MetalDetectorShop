const addOrderController  = require('../controllers/order/add-order.controller')
const orderListController =  require('../controllers/order/order-list.controller')


function initOrderRoutes(app){
    app.post('/add_order', addOrderController)

    app.get('/order_list', orderListController)
}

module.exports = initOrderRoutes