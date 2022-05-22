const { Trademark }  = require('../../database/models')
const { responseService } = require('../../services')

async function trademarkListController(reg, res) {
    const {
        name,
    } = reg.query

    const result = await Trademark.findAll()

    responseService.sendSuccessResponse(
        res,
        result,
    )
}

module.exports = trademarkListController