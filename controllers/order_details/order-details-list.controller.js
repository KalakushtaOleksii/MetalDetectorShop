const { OrderDetail, ProductAttribute, Order }  = require('../../database/models')
const { responseService } = require('../../services')

async function orderDetailsListController(reg, res) {
    const {
        quantity,
        productAttributesId,
        orderId,
    } = reg.query

    const result = await OrderDetail.findAll({
        include: [ ProductAttribute, Order, ]
    })

    responseService.sendSuccessResponse(
        res,
        result,
    )
}

module.exports = orderDetailsListController