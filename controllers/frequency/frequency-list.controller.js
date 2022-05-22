const { Frequency }  = require('../../database/models')
const { responseService } = require('../../services')

async function frequencyListController(reg, res) {
    const {
        valueFrequency,
    } = reg.query

    const result = await Frequency.findAll()

    responseService.sendSuccessResponse(
        res,
        result,
    )
}

module.exports = frequencyListController