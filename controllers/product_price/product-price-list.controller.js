const { ProductPrice, ProductAttribute }  = require('../../database/models')
const { responseService } = require('../../services')

async function productPriceListController(reg, res) {
    const {
        price,
        date,
        productAttributesId,
    } = reg.query

    const result = await ProductPrice.findOne({
        order: [['date', 'DESC']],
    })

    responseService.sendSuccessResponse(
        res,
        result,
    )
}

module.exports = productPriceListController