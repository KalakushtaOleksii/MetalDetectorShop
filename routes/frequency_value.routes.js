const addFrequencyValueController  = require('../controllers/frequency_value/add-frequency-value.controller')
const frequencyValueListController =  require('../controllers/frequency_value/frequency-value-list.controller')

function initFrequencyValueRoutes(app){
    app.post('/add-frequency-value', addFrequencyValueController)
    app.get('/frequency-value-list', frequencyValueListController)
}

module.exports = initFrequencyValueRoutes