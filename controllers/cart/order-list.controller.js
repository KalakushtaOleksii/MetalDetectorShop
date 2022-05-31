const { Cart, User }  = require('../../database/models')
const { responseService } = require('../../services')

async function orderListController(reg, res) {
    const {
        closed,
        userId,
    } = reg.query

    const result = await Cart.findAll({
        where: {email: reg.params.email},
        include: User,
    })

    responseService.sendSuccessResponse(
        res,
        result,
    )
}

module.exports = orderListController