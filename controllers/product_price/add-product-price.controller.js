const { ProductPrice } = require('../../database/models')
const { responseService, } = require('../../services')

async function addProductPriceController(reg, res) {
    const {
        price,
        date,
        productAttributesId,
    } = reg.body


    try {
        await ProductPrice.create({
            price,
            date,
            productAttributesId,
        })

        responseService.sendSuccessResponse(res, {
                price,
                date,
                productAttributesId,
            },
            201,
        )
    } catch (e) {
        responseService.sendErrorResponse(res, e)
    }
}

module.exports = addProductPriceController