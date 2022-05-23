const addStorageController  = require('../controllers/storage/add-storage.controller')
const storageListController =  require('../controllers/storage/storage-list.controller')

function initStorageRoutes(app){
    app.post('/add-storage', addStorageController)

    app.get('/storage-list', storageListController)
}

module.exports = initStorageRoutes