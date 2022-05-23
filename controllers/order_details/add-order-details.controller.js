const { OrderDetail } = require('../../database/models')
const { responseService, } = require('../../services')

async function addOrderDetailsController(reg, res) {
    const {
        quantity,
        productAttributesId,
        orderId,
    } = reg.body


    try {
        await OrderDetail.create({
            quantity,
            productAttributesId,
            orderId,
        })

        responseService.sendSuccessResponse(res, {
                quantity,
                productAttributesId,
                orderId,
            },
            201,
        )
    } catch (e) {
        responseService.sendErrorResponse(res, e)
    }
}

module.exports = addOrderDetailsController