const Dto = require('../dto/index')
const {Product, Frequency} = require("../database/models");
function ProductResponseToProductDtoMapper(product, category, frequencies, price, trademark){
    const result = Dto.ProductDto(
        product.dataValues.id,
        product.Product.productName,
        product.Product.image,
        Dto.CategoryDto(
            category.dataValues.id,
            category.dataValues.desc,
            category.dataValues.name,
        ),
        Dto.TrademarkDto(
            trademark.dataValues.id,
            trademark.dataValues.name,
        ),
        Dto.CountryDto(
            product.Country.id,
            product.Country.name,
        ),
        frequencies.map((frequency) => {
            return Dto.FrequencyDto(
                frequency.Frequency.id,
                frequency.Frequency.valueFrequency,
            )
        }),
        price.dataValues.price,
    )

    return result;
}

module.exports = ProductResponseToProductDtoMapper