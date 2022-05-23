const { Order } = require('../../database/models')
const { responseService, } = require('../../services')

async function addOrderController(reg, res) {
    const {
        date,
        userId,
    } = reg.body


    try {
        await Order.create({
            date,
            userId,
        })

        responseService.sendSuccessResponse(res, {
                date,
                userId,
            },
            201,
        )
    } catch (e) {
        responseService.sendErrorResponse(res, e)
    }
}

module.exports = addOrderController