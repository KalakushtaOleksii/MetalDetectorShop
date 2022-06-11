const Dto = require('../dto/index')
const {cartDto, cartItemDto} = require("../dto")

function cartResponseToCartDtoMapper(cartResponse) {
    let totalPrice = 0
    return cartDto(
        cartResponse.CartItems.map(cartItem => {

            const quantity = cartItem.dataValues.quantity
            const price = cartItem.ProductAttribute.ProductPrices[0].dataValues.price

            totalPrice += price * quantity

            return cartItemDto(
                cartItem.ProductAttribute.Product.dataValues.productName,
                quantity,
                price
            )
        }),
        totalPrice
    )
}

module.exports = cartResponseToCartDtoMapper