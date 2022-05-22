const { Frequency } = require('../../database/models')
const { responseService, } = require('../../services')

async function addFrequencyController(reg, res) {
    const {
        valueFrequency,
    } = reg.body


    try {
        await Frequency.create({
            valueFrequency,
        })

        responseService.sendSuccessResponse(res, {
                valueFrequency,
            },
            201,
        )
    } catch (e) {
        responseService.sendErrorResponse(res, e)
    }
}

module.exports = addFrequencyController