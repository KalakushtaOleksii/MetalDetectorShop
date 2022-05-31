const Dto = require('../dto/index')

function orderResponseToOrderDtoMapper(email, orderResponse) {

    return Dto.orderDto(
        email,
        orderResponse.map(orderItem => {
            let totalPrice = 0
            return Dto.orderItemDto(
                orderItem.dataValues.id,
                orderItem.CartItems.map(orderSubItem => {

                    const quantity = orderSubItem.dataValues.quantity
                    const p = orderSubItem.ProductAttribute.ProductPrices
                        .filter(item => new Date(item.dataValues.date).getTime() < new Date(orderItem.closed).getTime())
                        .slice(-1)

                    const price = p[0].dataValues.price

                    totalPrice += price * quantity

                    return Dto.orderSubItemDto(
                        orderSubItem.ProductAttribute.Product.dataValues.productName,
                        quantity,
                        price
                    )
                }),
                totalPrice,
                orderItem.dataValues.closed
            )
    }))




}

module.exports = orderResponseToOrderDtoMapper