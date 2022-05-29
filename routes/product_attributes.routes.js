const addProductAttributeController  = require('../controllers/product_attributes/add-product-attributes.controller')
const productAttributesListController =  require('../controllers/product_attributes/product-attributes-list.controller')
const getProductAttributesListIdController = require('../controllers/product_attributes/get-product-attributes-list-id.controller')

function initProductAttributesRoutes(app){
    app.post('/add-product-attributes', addProductAttributeController)

    app.get('/product-attributes-list', productAttributesListController)

    app.get('/get-product-attributes/:id', getProductAttributesListIdController)
}

module.exports = initProductAttributesRoutes