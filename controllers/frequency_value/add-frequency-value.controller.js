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
        return res.status(400).json({message:'Частота і атрибут не добавлений'})
    }
}

module.exports = addFrequencyValueController