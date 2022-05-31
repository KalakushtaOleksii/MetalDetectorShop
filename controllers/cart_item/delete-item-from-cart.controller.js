const { CartItem } = require('../../database/models')
const {responseService} = require("../../services")

async function deleteItemFromCartController(reg, res) {
    const {
        cartId,
        productAttributesId,
        storageId,
        quantity,
    } = reg.body

    const item = await CartItem.findOne({
        where: {
            cart_id: cartId,
            product_attributes_id: productAttributesId,
            storage_id: storageId
        }
    })

    if (!item || item.dataValues.quantity < quantity) {
        responseService.sendErrorResponse(res, "You can't delete more than you added")
    } else if (item.dataValues.quantity === quantity) {
        await CartItem.destroy({
            where: {id: item.dataValues.id}
        })
    } else {
        await CartItem.update(
            {
                quantity: item.dataValues.quantity - quantity
            },
            {
                where: {id: item.dataValues.id}
            })
    }


    responseService.sendSuccessResponse(
        res,
        "Ok",
    )
}



module.exports = deleteItemFromCartController