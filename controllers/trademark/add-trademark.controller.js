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
        return res.status(400).json({message:'Трейдмарка не добавлена'})
    }
}

module.exports = addTrademarkController