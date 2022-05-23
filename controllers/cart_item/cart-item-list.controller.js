const { CartItem, Cart, ProductAttribute }  = require('../../database/models')
const { responseService } = require('../../services')

async function cartItemListController(reg, res) {
    const {
        quantity,
        cardId,
        productAttributesId,
    } = reg.query

    const result = await CartItem.findAll({
        include: [Cart,ProductAttribute],
    })

    responseService.sendSuccessResponse(
        res,
        result,
    )
}

module.exports = cartItemListController