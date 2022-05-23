const { ProductAttribute } = require('../../database/models')
const { responseService, } = require('../../services')

async function addProductAttributeController(reg, res) {
    const {
        trademarkId,
        countryIid,
        productId,
        frequencyListId,
    } = reg.body


    try {
        await ProductAttribute.create({
            trademarkId,
            countryIid,
            productId,
            frequencyListId,
        })

        responseService.sendSuccessResponse(res, {
                trademarkId,
                countryIid,
                productId,
            },
            201,
        )
    } catch (e) {
        responseService.sendErrorResponse(res, e)
    }
}

module.exports = addProductAttributeController