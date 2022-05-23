const { ProductAttribute, Trademark, Country, Product, ProductCategory }  = require('../../database/models')
const { responseService } = require('../../services')

async function productAttributesListController(reg, res) {
    const {
        trademarkId,
        countryIid,
        productId,
    } = reg.query

    const result = await ProductAttribute.findAll({

        include: [Trademark, Country,Product ]

    })

    console.log('result')


    responseService.sendSuccessResponse(
        res,
        result,
    )

}

module.exports = productAttributesListController