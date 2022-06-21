const { ProductPrice } = require('../../database/models')
const { responseService, } = require('../../services')

async function addProductPriceController(reg, res) {
    const {
        price,
        productAttributesId,
    } = reg.body


    try {
        const date = reg.query.date ??= new Date()
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
        //TODO - change to status(..).json()
        responseService.sendErrorResponse(res, e)
    }
}

module.exports = addProductPriceController