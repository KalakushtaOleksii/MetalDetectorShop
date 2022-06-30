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
        console.log(e)
        return res.status(400).json({message:'Кількість продукту не добавлено'})
    }
}

module.exports = addStorageProductListController