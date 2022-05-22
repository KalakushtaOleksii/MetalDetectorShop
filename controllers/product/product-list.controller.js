const { Product }  = require('../../database/models')
const { responseService } = require('../../services')

async function productListController(reg, res) {
    const {
        productName,
        image,
        categoryId,
    } = reg.query

    const result = await Product.findAll()

    responseService.sendSuccessResponse(
        res,
        result,
    )
}

module.exports = productListController