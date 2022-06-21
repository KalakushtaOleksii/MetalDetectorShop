const { Cart, User} = require('../../database/models')
const { responseService, } = require('../../services')

async function addCartController(reg, res) {
    const {
        email,
    } = reg.body


    try {
        await User.findOne({
            where: {email: email}
        })
            .then(async (user) => {
                await Cart.create({
                    userId: user.dataValues.id,
                })
            })


        responseService.sendSuccessResponse(res, {
                email,
            },
            201,
        )
    } catch (e) {
        //TODO - change to status(..).json()
        responseService.sendErrorResponse(res, e)
    }
}

module.exports = addCartController