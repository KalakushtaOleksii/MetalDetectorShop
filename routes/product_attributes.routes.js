const addProductAttributeController  = require('../controllers/product_attributes/add-product-attributes.controller')
const productAttributesListController =  require('../controllers/product_attributes/product-attributes-list.controller')

function initProductAttributesRoutes(app){
    app.post('/add-product-attributes', addProductAttributeController)

    app.get('/product-attributes-list', productAttributesListController)
}

module.exports = initProductAttributesRoutes