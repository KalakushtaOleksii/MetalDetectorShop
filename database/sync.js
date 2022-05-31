const Cart = require("./models/cart.model");
const CartItem = require("./models/cart-item.model");
const Country = require("./models/country.model");
const Frequency = require("./models/frequency.model");
const FrequencyValue = require("./models/frequency_value.model");
const Product = require("./models/product.model");
const ProductAttribute = require("./models/product-attribute.model");
const ProductCategory = require("./models/product-category.model");
const ProductPrice = require("./models/product-price.model");
const Storage = require("./models/storage.model");
const StorageProductList = require("./models/storage-product-list.model");
const Trademark = require("./models/trademark.model");
const User = require("./models/user.model");

;(
    async () => {
        await Cart.sync()
        await CartItem.sync()
        await Country.sync()
        await Frequency.sync()
        await FrequencyValue.sync()
        await Product.sync()
        await ProductAttribute.sync()
        await ProductCategory.sync()
        await ProductPrice.sync()
        await Storage.sync()
        await StorageProductList.sync()
        await Trademark.sync()
        await User.sync()
    }
)()