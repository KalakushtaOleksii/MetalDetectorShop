const { ProductAttribute, Trademark, Country, Product, Frequency, FrequencyValue, ProductCategory, ProductPrice}  = require('../../database/models')
const ProductResponseToProductDtoMapper = require('../../mappers/product-response-to-product-dto.mapper')
const { responseService } = require('../../services')
const {Sequelize} = require("sequelize");

async function getProductAttributesListIdController(reg, res) {
    const {
        countryIid,
        productId,
    } = reg.query

    const result = await ProductAttribute.findOne({
        where: { id: reg.params.id},
        include: [
            Country,
            Product,
        ]

    })
        .then( async (attribute) => {
            attribute.id

            const freq = await FrequencyValue.findAll({
                where: {product_attributes_id: reg.params.id},
                include: [Frequency]
            })

            const category = await ProductCategory.findOne({
                where: {id: attribute.Product.dataValues.categoryId}
            })

            const trademark = await Trademark.findOne({
                where: {id: attribute.Product.dataValues.trademarkId}
            })

            //const date_param = new Date(reg.params.date)

            const price = await ProductPrice.findOne({
                where: {
                    product_attributes_id: reg.params.id,
                    //date: {[Sequelize.lte]: date_param}
                },
                order: [['date', 'DESC' ]]
            })

            return ProductResponseToProductDtoMapper(attribute, category, freq, price, trademark)
        })





    responseService.sendSuccessResponse(
        res,
        result,
    )

}

module.exports = getProductAttributesListIdController