const { ProductAttribute } = require('../../database/models')
const { ProductPrice } = require('../../database/models')
const { responseService, } = require('../../services')

async function addProductAttributeController(reg, res) {
    const {
        countryIid,
        productId,
        frequencyListId,
        price,
    } = reg.body


    try {
        const attribute = await ProductAttribute.create({
            countryIid,
            productId,
            frequencyListId,
        })

        await ProductPrice.create({
            price,
            date: new Date(),
            productAttributesId: attribute.id,
        })

        responseService.sendSuccessResponse(res, {
                countryIid,
                productId,
                price,
            },
            201,
        )
    } catch (e) {
        return res.status(400).json({message:'Атрибут не добавлений'})
    }
}

module.exports = addProductAttributeController