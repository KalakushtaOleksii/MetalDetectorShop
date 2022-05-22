const addTrademarkController  = require('../controllers/trademark/add-trademark.controller')
const trademarkListController =  require('../controllers/trademark/trademark-list.controller')

function initTrademarkRoutes(app){
    app.post('/add-trademark', addTrademarkController)
    app.get('/trademark-list', trademarkListController)
}

module.exports = initTrademarkRoutes