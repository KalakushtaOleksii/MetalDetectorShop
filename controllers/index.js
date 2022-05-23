const userControllers = require('./users')
const countryControllers = require('./country')
const trademarkControllers = require('./trademark')
const frequencyControllers = require('./frequency')
const productCategoryControllers = require('./product_category')
const productControllers = require('./product')
const storageControllers = require('./storage')
const storageProductListControllers = require('./storage_product_list')
const productAttributesControllers = require('./product_attributes')



module.exports = {
    ...userControllers,
    ...countryControllers,
    ...trademarkControllers,
    ...frequencyControllers,
    ...productCategoryControllers,
    ...productControllers,
    ...storageControllers,
    ...storageProductListControllers,
    ...productAttributesControllers,
}