const { ProductAttribute, Trademark, Country, Product, Frequency, FrequencyValue, ProductCategory, ProductPrice}  = require('../../database/models')
const ProductResponseToProductDtoMapper = require('../../mappers/product-response-to-product-dto.mapper')
const { responseService } = require('../../services')
const { Op } = require("sequelize")

async function getProductAttributesListIdController(reg, res) {
    const {
        countryIid,
        productId,
    } = reg.query

    let date
    if (reg.query.date)
        date = new Date(reg.query.date)
    else
        date = new Date()

    const result = await ProductAttribute.findOne({
        where: { id: reg.params.id},
        include: [
            Country,
            {
                model: Product,
                include: [ProductCategory, Trademark]
            },
            {
                model: FrequencyValue,
                include: [Frequency]
            },
            {
                model:ProductPrice,
                where: {date: {[Op.lte]: date}},
                order: [['date', 'DESC']],
            },
        ]

    })
        .then( async (attribute) => {
            return ProductResponseToProductDtoMapper(attribute)
        })





    responseService.sendSuccessResponse(
        res,
        result,
    )

}

module.exports = getProductAttributesListIdController