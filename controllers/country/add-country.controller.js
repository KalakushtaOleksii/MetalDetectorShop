const { Country } = require('../../database/models')
const { responseService, } = require('../../services')

async function addCountryController(reg, res) {
    const {
        name,
    } = reg.body


    try {
        await Country.create({
            name,
        })

        responseService.sendSuccessResponse(res, {
                name,
            },
            201,
        )
    } catch (e) {
        responseService.sendErrorResponse(res, e)
    }
}

module.exports = addCountryController