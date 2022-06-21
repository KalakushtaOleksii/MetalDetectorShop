const { StorageProductList } = require('../../database/models')
const { responseService, } = require('../../services')

async function addStorageProductListController(reg, res) {
    const {
        productAttributesId,
        storageId,
        quantity,
    } = reg.body


    try {
        await StorageProductList.create({
            productAttributesId,
            storageId,
            quantity,
        })

        responseService.sendSuccessResponse(res, {
                storageId,
                quantity,
            },
            201,
        )
    } catch (e) {
        //TODO - change to status(..).json()
        responseService.sendErrorResponse(res, e)
    }
}

module.exports = addStorageProductListController