const { StorageProductList }  = require('../../database/models')
const { responseService } = require('../../services')

async function storageProductListController(reg, res) {
    const {
        productName,
        image,
    } = reg.query

    const result = await StorageProductList.findAll({
  //      include: ProductCategory,
    })

    responseService.sendSuccessResponse(
        res,
        result,
    )
}

module.exports = storageProductListController