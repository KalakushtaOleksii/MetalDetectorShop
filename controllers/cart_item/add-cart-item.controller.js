const { CartItem } = require('../../database/models')
const { responseService, } = require('../../services')

async function addCartItemController(reg, res) {
    const {
        quantity,
        cardId,
        productAttributesId,
    } = reg.body


    try {
        await CartItem.create({
            quantity,
            cardId,
            productAttributesId,
        })

        responseService.sendSuccessResponse(res, {
                quantity,
                cardId,
                productAttributesId,
            },
            201,
        )
    } catch (e) {
        responseService.sendErrorResponse(res, e)
    }
}

module.exports = addCartItemController