const addProductController  = require('../controllers/product/add-product.controller')
const productListController =  require('../controllers/product/product-list.controller')

function initProductRoutes(app){
    app.post('/add-product', addProductController)

    app.get('/product-list', productListController)
}

module.exports = initProductRoutes