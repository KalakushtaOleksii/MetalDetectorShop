const { Product } = require('../../database/models')
const { responseService, } = require('../../services')

async function addProductController(reg, res) {
    const {
        productName,
        image,
        categoryId,
        trademarkId,
    } = reg.body


    try {
        await Product.create({
            productName,
            image,
            categoryId,
            trademarkId,
        })

        responseService.sendSuccessResponse(res, {
                productName,
                image,
                categoryId,
                trademarkId,
            },
            201,
        )
    } catch (e) {
        //TODO - change to status(..).json()
        responseService.sendErrorResponse(res, e)
    }
}

module.exports = addProductController