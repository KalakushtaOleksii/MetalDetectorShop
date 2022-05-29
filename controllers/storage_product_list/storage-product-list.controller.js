const { StorageProductList }  = require('../../database/models')
const { responseService } = require('../../services')

async function getProductListByStorageController(reg, res) {
    const {
        productAttributesId,
        storageId,
        quantity,
    } = reg.query

    const result = await StorageProductList.findAll({
  //      include: ProductCategory,
    })

    responseService.sendSuccessResponse(
        res,
        result,
    )
}

module.exports = getProductListByStorageController