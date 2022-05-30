const Dto = require('../dto/index')
const {Product, Frequency} = require("../database/models");
function ProductResponseToProductDtoMapper(product){
    const result = Dto.ProductDto(
        product.dataValues.id,
        product.Product.productName,
        product.Product.image,
        Dto.CategoryDto(
            product.Product.ProductCategory.dataValues.id,
            product.Product.ProductCategory.dataValues.desc,
            product.Product.ProductCategory.dataValues.name,
        ),
        Dto.TrademarkDto(
            product.Product.Trademark.dataValues.id,
            product.Product.Trademark.dataValues.name,
        ),
        Dto.CountryDto(
            product.Country.id,
            product.Country.name,
        ),
        product.FrequencyValues.map((frequency) => {
            return Dto.FrequencyDto(
                frequency.Frequency.id,
                frequency.Frequency.valueFrequency,
            )
        }),
        product.ProductPrices[0].dataValues.price ??= 0,
    )

    return result
}

module.exports = ProductResponseToProductDtoMapper