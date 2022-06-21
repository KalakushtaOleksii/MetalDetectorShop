const { Storage } = require('../../database/models')
const { responseService, } = require('../../services')

async function addStorageController(reg, res) {
    const {
        storageName,
        location,
    } = reg.body


    try {
        await Storage.create({
            storageName,
            location,
        })

        responseService.sendSuccessResponse(res, {
                storageName,
                location,
            },
            201,
        )
    } catch (e) {
        //TODO - change to status(..).json()
        responseService.sendErrorResponse(res, e)
    }
}

module.exports = addStorageController