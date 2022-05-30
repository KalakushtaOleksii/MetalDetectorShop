const {
    StorageProductList,
    Product,
    ProductPrice,
    FrequencyValue,
    Frequency,
    ProductAttribute
} = require('../../database/models')
const {responseService} = require('../../services')
const ProductListResponseToProductListDtoMapper = require('../../mappers/product_list_response_to_product_list_dto.mapper')
const {Op} = require("sequelize")

async function getProductListByStorageController(reg, res) {
    const {
        productAttributesId,
        storageId,
        quantity,
    } = reg.query

    const lim = 2
    const page = reg.query.page ??= 1
    let date
    if (reg.query.date)
        date = new Date(reg.query.date)
    else
        date = new Date()
    const result =(await StorageProductList.findAll({
        where: {
            storage_id: reg.params.id,
            quantity: {[Op.gt]: 1},
        },
        include: [{
            model:ProductAttribute,
            include: [Product,
                {
                    model:ProductPrice,
                    where: {date: {[Op.lte]: date}},
                    order: [['date', 'DESC']],
                },
                {
                    model: FrequencyValue,
                    include: [Frequency]
                }]
        }],
        offset: (page - 1) * lim,
        order: [['createdAt', 'DESC']],
        limit: lim,
    })).map(productStorage => {
        return ProductListResponseToProductListDtoMapper(productStorage)
    })

    responseService.sendSuccessResponse(
        res,
        result,
    )
}

module.exports = getProductListByStorageController