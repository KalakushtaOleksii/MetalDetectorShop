const { Order, User }  = require('../../database/models')
const { responseService } = require('../../services')

async function orderListController(reg, res) {
    const {
        date,
        userId,
    } = reg.query

    const result = await Order.findAll({
        include: User,
    })

    responseService.sendSuccessResponse(
        res,
        result,
    )
}

module.exports = orderListController