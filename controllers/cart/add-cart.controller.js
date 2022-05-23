const { Cart } = require('../../database/models')
const { responseService, } = require('../../services')

async function addCartController(reg, res) {
    const {
        closed,
        userId,
    } = reg.body


    try {
        await Cart.create({
            closed,
            userId,
        })

        responseService.sendSuccessResponse(res, {
                closed,
                userId,
            },
            201,
        )
    } catch (e) {
        responseService.sendErrorResponse(res, e)
    }
}

module.exports = addCartController