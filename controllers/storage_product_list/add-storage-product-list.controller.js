const { StorageProductList } = require('../../database/models')
const { responseService, } = require('../../services')

async function addStorageProductListController(reg, res) {
    const {
        storageId,
        quantity,
    } = reg.body


    try {
        await StorageProductList.create({
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
        responseService.sendErrorResponse(res, e)
    }
}

module.exports = addStorageProductListController