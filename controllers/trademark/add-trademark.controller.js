const { Trademark } = require('../../database/models')
const { responseService, } = require('../../services')

async function addTrademarkController(reg, res) {
    const {
        name,
    } = reg.body


    try {
        await Trademark.create({
            name,
        })

        responseService.sendSuccessResponse(res, {
                name,
            },
            201,
        )
    } catch (e) {
        //TODO - change to status(..).json()
        responseService.sendErrorResponse(res, e)
    }
}

module.exports = addTrademarkController