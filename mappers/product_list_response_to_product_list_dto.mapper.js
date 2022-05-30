const Dto = require('../dto/index')
const { Product, StorageProductList, ProductPrice, FrequencyValue,ProductAttribute } = require('../database/models')

function ProductListResponseToProductListDtoMapper(storeProductList) {
    const result = Dto.StorageProductListByStorageDto(
        storeProductList.ProductAttribute.dataValues.id,
        storeProductList.ProductAttribute.Product.dataValues.productName,
        storeProductList.ProductAttribute.FrequencyValues.map((frequency) => {
            return Dto.FrequencyDto(
                frequency.Frequency.id,
                frequency.Frequency.valueFrequency,
            )
        }),
        storeProductList.dataValues.quantity,
        storeProductList.ProductAttribute.ProductPrices[0].dataValues.price ??= 0,

    )
    return result
}

module.exports = ProductListResponseToProductListDtoMapper