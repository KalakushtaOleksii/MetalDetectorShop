const addFrequencyController  = require('../controllers/frequency/add-frequency.controller')
const frequencyListController =  require('../controllers/frequency/frequency-list.controller')

function initFrequencyRoutes(app){
    app.post('/add-frequency', addFrequencyController)
    app.get('/frequency-list', frequencyListController)
}

module.exports = initFrequencyRoutes