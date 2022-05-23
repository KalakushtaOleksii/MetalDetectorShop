const { Product, ProductCategory }  = require('../../database/models')
const { responseService } = require('../../services')

async function productListController(reg, res) {
    const {
        productName,
        image,
    } = reg.query

    const result = await Product.findAll({
        include: ProductCategory,
    })

    responseService.sendSuccessResponse(
        res,
        result,
    )
}

module.exports = productListController