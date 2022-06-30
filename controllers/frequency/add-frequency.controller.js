const { Frequency } = require('../../database/models')
const { responseService, } = require('../../services')

async function addFrequencyController(reg, res) {
    const {
        valueFrequency,
    } = reg.body


    try {
        await Frequency.create({
            valueFrequency,
        })

        responseService.sendSuccessResponse(res, {
                valueFrequency,
            },
            201,
        )
    } catch (e) {
        return res.status(400).json({message:'Частота не добавлена'})
    }
}

module.exports = addFrequencyController