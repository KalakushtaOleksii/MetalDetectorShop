const { Product } = require('../../database/models')
const { responseService, } = require('../../services')

async function addProductController(reg, res) {
    const {
        productName,
        image,
        categoryId,
    } = reg.body


    try {
        await Product.create({
            productName,
            image,
            categoryId,
        })

        responseService.sendSuccessResponse(res, {
                productName,
                image,
                categoryId,
            },
            201,
        )
    } catch (e) {
        responseService.sendErrorResponse(res, e)
    }
}

module.exports = addProductController