const addProductPriceController  = require('../controllers/product_price/add-product-price.controller')
const productPriceListController =  require('../controllers/product_price/product-price-list.controller')


function initProductPriceRoutes(app){
    app.post('/add_product_price', addProductPriceController)

    app.get('/product_price_list', productPriceListController)
}

module.exports = initProductPriceRoutes