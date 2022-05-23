const { Storage }  = require('../../database/models')
const { responseService } = require('../../services')

async function storageListController(reg, res) {
    const {
        storageName,
        location,
    } = reg.query

    const result = await Storage.findAll()

    responseService.sendSuccessResponse(
        res,
        result,
    )
}

module.exports = storageListController