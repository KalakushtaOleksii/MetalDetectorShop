const userControllers = require('./users')
const countryControllers = require('./country')
const trademarkControllers = require('./trademark')
const frequencyControllers = require('./frequency')
const productCategoryControllers = require('./product_category')
const productControllers = require('./product')



module.exports = {
    ...userControllers,
    ...countryControllers,
    ...trademarkControllers,
    ...frequencyControllers,
    ...productCategoryControllers,
    ...productControllers,
}