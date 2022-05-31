function cartResponseToCartDto(cartItems, totalPrice) {
    return {
        cartItems,
        totalPrice,
    }
}

module.exports = cartResponseToCartDto