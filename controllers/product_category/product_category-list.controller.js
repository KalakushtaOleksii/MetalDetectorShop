const { ProductCategory }  = require('../../database/models')
const { responseService } = require('../../services')

async function productCategoryListController(reg, res) {
    const {
        desc,
        name,
    } = reg.query

    const result = await ProductCategory.findAll()

    responseService.sendSuccessResponse(
        res,
        result,
    )
}

module.exports = productCategoryListController