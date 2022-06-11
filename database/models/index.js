const Cart = require('./cart.model')
const CartItem = require('./cart-item.model')
const Country = require('./country.model')
const Frequency = require('./frequency.model')
const FrequencyValue = require('./frequency_value.model')
const Product = require('./product.model')
const ProductAttribute = require('./product-attribute.model')
const ProductCategory = require('./product-category.model')
const ProductPrice = require('./product-price.model')
const Storage = require('./storage.model')
const StorageProductList = require('./storage-product-list.model')
const Trademark = require('./trademark.model')
const User = require('./user.model')
const Token = require('./token.model')

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

// trademarks - product O2M
Trademark.hasMany(Product, { foreignKey: 'trademark_id' })
Product.belongsTo(Trademark, { foreignKey: 'trademark_id' })
//

// product_attributes - frequency M2M
ProductAttribute.hasMany(FrequencyValue, { foreignKey: 'product_attributes_id' })
FrequencyValue.belongsTo(ProductAttribute,{foreignKey: 'product_attributes_id'})
//
// frequency - FrequencyList M2M
Frequency.hasMany(FrequencyValue, { foreignKey: 'frequency_id' })
FrequencyValue.belongsTo(Frequency,{foreignKey: 'frequency_id'})
//

// product_price - product_attributes M2O
ProductAttribute.hasMany(ProductPrice, { foreignKey: 'product_attributes_id' })
ProductPrice.belongsTo(ProductAttribute, { foreignKey: 'product_attributes_id' })
//

// product_attributes - storage M2M
ProductAttribute.hasMany(StorageProductList, { foreignKey: 'product_attributes_id'})
StorageProductList.belongsTo(ProductAttribute, { foreignKey: 'product_attributes_id'})
//

//
Storage.hasMany(StorageProductList, { foreignKey: 'storage_id' })
StorageProductList.belongsTo(Storage, { foreignKey: 'storage_id' })
//

//
Storage.hasMany(CartItem, { foreignKey: 'storage_id' })
CartItem.belongsTo(Storage, { foreignKey: 'storage_id' })
//

// product_attributes - cart M2M
ProductAttribute.hasMany(CartItem, { foreignKey: 'product_attributes_id' })
CartItem.belongsTo(ProductAttribute, { foreignKey: 'product_attributes_id' })
//

//
Cart.hasMany(CartItem, { foreignKey: 'cart_id' })
CartItem.belongsTo(Cart, { foreignKey: 'cart_id' })
//

// cart - users M2O
User.hasMany(Cart, { foreignKey: 'user_id' })
Cart.belongsTo(User, { foreignKey: 'user_id' })
//

// token - users M2O
User.hasMany(Token, { foreignKey: 'user_id' })
Token.belongsTo(User, { foreignKey: 'user_id' })
//


module.exports = {
    Cart,
    CartItem,
    Country,
    Frequency,
    FrequencyValue,
    Product,
    ProductAttribute,
    ProductCategory,
    ProductPrice,
    Storage,
    StorageProductList,
    Trademark,
    User,
    Token,
}