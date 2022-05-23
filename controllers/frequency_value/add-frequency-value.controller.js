const { FrequencyValue } = require('../../database/models')
const { responseService, } = require('../../services')

async function addFrequencyValueController(reg, res) {
    const {
        productAttributesId,
        frequencyId,
    } = reg.body


    try {
        await FrequencyValue.create({
            productAttributesId,
            frequencyId,
        })

        responseService.sendSuccessResponse(res, {
                productAttributesId,
                frequencyId,
            },
            201,
        )
    } catch (e) {
        responseService.sendErrorResponse(res, e)
    }
}

module.exports = addFrequencyValueController