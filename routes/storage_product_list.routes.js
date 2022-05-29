const addStorageProductListController  = require('../controllers/storage_product_list/add-storage-product-list.controller')
const storageProductListController =  require('../controllers/storage_product_list/storage-product-list.controller')

function initStorageProductListRoutes(app){
    app.post('/add-storage-product', addStorageProductListController)

    app.get('/product-list', storageProductListController)
}

module.exports = initStorageProductListRoutes