const { User } = require('../../database/models')
const  md5 = require('md5')
const { responseService, } = require('../../services')


async function signUpController(reg, res) {
    const {
        firstName,
        lastName,
        dateOfBirth,
        email,
        password,
    } = reg.body

    try {
        await User.create({
            firstName,
            lastName,
            dateOfBirth,
            email,
            password: md5(password),
        })

        responseService.sendSuccessResponse(res,
            {
                firstName,
                lastName,
                dateOfBirth,
                email,
            },
            201,
        )
    } catch (e) {
        responseService.sendErrorResponse(res, e)
    }
}


module.exports = signUpController