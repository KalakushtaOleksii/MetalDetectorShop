const addCountryController  = require('../controllers/country/add-country.controller')
const countryListController =  require('../controllers/country/country-list.controller')

function initCountryRoutes(app){
    app.post('/add-country', addCountryController)

    app.get('/country-list', countryListController)
}

module.exports = initCountryRoutes