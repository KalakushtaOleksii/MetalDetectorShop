const { Country }  = require('../../database/models')
const { responseService } = require('../../services')

async function countryListController(reg, res) {
    const {
        name,
    } = reg.query

    const result = await Country.findAll()

    responseService.sendSuccessResponse(
        res,
        result,
    )
}

module.exports = countryListController