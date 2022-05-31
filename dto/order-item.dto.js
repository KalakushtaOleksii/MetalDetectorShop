function orderItemDto(id, orderSubItems, totalPrice, date) {
    return {
        id,
        orderSubItems,
        totalPrice,
        date
    }
}

module.exports = orderItemDto