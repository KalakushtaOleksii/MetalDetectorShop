const addProductCategoryController  = require('../controllers/product_category/add-product_category.controller')
const productCategoryListController =  require('../controllers/product_category/product_category-list.controller')

function initProductCategoryRoutes(app){
    app.post('/add_product_category', addProductCategoryController)

    app.get('/product_category_list', productCategoryListController)
}

module.exports = initProductCategoryRoutes