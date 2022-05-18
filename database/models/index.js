const Cart = require('./cart.model')
const CartItem = require('./cart-item.model')
const Country = require('./country.model')
const Frequency = require('./frequency.model')
const FrequencyList = require('./frequency-list.model')
const Order = require('./order.model')
const OrderDetail = require('./order-detail.model')
const Product = require('./product.model')
const ProductAttribute = require('./product-attribute.model')
const ProductCategory = require('./product-category.model')
const ProductPrice = require('./product-price.model')
const Storage = require('./storage.model')
const StorageProductList = require('./storage-product-list.model')
const Trademark = require('./trademark.model')
const User = require('./user.model')

// product_attributes - product M2O
Product.hasMany(ProductAttribute, { foreignKey: 'product_id' })
ProductAttribute.belongsTo(Product, { foreignKey: 'product_id' })
//

// product_category - product O2M
ProductCategory.hasMany(Product, { foreignKey: 'category_id' })
Product.belongsTo(ProductCategory, { foreignKey: 'category_id' })
//

// country - product_attributes O2M
Country.hasMany(ProductAttribute, { foreignKey: 'country_id' })
ProductAttribute.belongsTo(Country, { foreignKey: 'country_id' })
//

// trademarks - product_attributes O2M
Trademark.hasMany(ProductAttribute, { foreignKey: 'trademark_id' })
ProductAttribute.belongsTo(Trademark, { foreignKey: 'trademark_id' })
//

// product_attributes - frequency M2M
ProductAttribute.hasMany(Frequency, { foreignKey: 'frequency_list_id' })
Frequency.belongsTo(ProductAttribute)
//

// product_price - product_attributes M2O
ProductAttribute.hasMany(ProductPrice, { foreignKey: 'product_attributes_id' })
ProductPrice.belongsTo(ProductAttribute, { foreignKey: 'product_attributes_id' })
//

// product_attributes - storage M2M
ProductAttribute.hasMany(Storage)
Storage.belongsTo(ProductAttribute)
//

// product - orders M2M
Product.hasMany(Order)
Order.belongsTo(Product)
//

// product_attributes - cart M2M
ProductAttribute.hasMany(Cart)
Cart.belongsTo(ProductAttribute)
//

// orders - users M2O
User.hasMany(Order, { foreignKey: 'user_id' })
Order.belongsTo(User, { foreignKey: 'user_id' })
//

// cart - users M2O
User.hasMany(Cart, { foreignKey: 'user_id' })
Cart.belongsTo(User, { foreignKey: 'user_id' })
//


module.exports = {
    Cart,
    CartItem,
    Country,
    Frequency,
    FrequencyList,
    Order,
    OrderDetail,
    Product,
    ProductAttribute,
    ProductCategory,
    ProductPrice,
    Storage,
    StorageProductList,
    Trademark,
    User,
}