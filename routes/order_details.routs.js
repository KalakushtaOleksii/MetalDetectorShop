const addOrderDetailsController  = require('../controllers/order_details/add-order-details.controller')
const orderDetailsListController =  require('../controllers/order_details/order-details-list.controller')


function initOrderDetailsRoutes(app){
    app.post('/add_order_details', addOrderDetailsController)

    app.get('/order_details_list', orderDetailsListController)
}

module.exports = initOrderDetailsRoutes