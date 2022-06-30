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
        return res.status(400).json({message:'Продукт не добавлений'})
    }
}

module.exports = addProductController