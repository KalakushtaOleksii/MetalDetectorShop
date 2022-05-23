const { FrequencyValue, ProductAttribute, Frequency }  = require('../../database/models')
const { responseService } = require('../../services')

async function frequencyValueListController(reg, res) {
    const {
        productAttributesId,
        frequencyId,
    } = reg.query

    const result = await FrequencyValue.findAll({
        include: [ProductAttribute, Frequency]
    })


    responseService.sendSuccessResponse(
        res,
        result,
    )
}

module.exports = frequencyValueListController