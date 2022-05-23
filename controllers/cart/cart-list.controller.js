const { Cart, User }  = require('../../database/models')
const { responseService } = require('../../services')

async function cartListController(reg, res) {
    const {
        closed,
        userId,
    } = reg.query

    const result = await Cart.findAll({
        include: User,
    })

    responseService.sendSuccessResponse(
        res,
        result,
    )
}

module.exports = cartListController