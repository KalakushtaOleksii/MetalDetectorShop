const userControllers = require('./users')
const countryControllers = require('./country')
const trademarkControllers = require('./trademark')
const frequencyControllers = require('./frequency')
const frequencyValueControllers = require('./frequency_value')
const productCategoryControllers = require('./product_category')
const productControllers = require('./product')
const storageControllers = require('./storage')
const storageProductListControllers = require('./storage_product_list')
const productAttributesControllers = require('./product_attributes')
const productPriceListControllers = require('./product_price')
const orderControllers = require('./order')
const orderDetailsControllers = require('./order_details')
const cartControllers = require('./cart')
const cartItemControllers = require('./cart_item')


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
    ...productPriceListControllers,
    ...orderControllers,
    ...orderDetailsControllers,
    ...cartControllers,
    ...cartItemControllers,
    ...frequencyValueControllers,
}