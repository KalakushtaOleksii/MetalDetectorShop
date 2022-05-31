const {responseService} = require("../../services");
const {CartItem, Cart, StorageProductList} = require("../../database/models");

async function closeCartController (reg, res){
    const {
        id
    } = reg.params

    const cart = await Cart.findOne({
        where: {
            id: id,
            closed: null
        },
        include: [CartItem]
    })

    if (!cart) {
        responseService.sendErrorResponse(res, "Cart is not exist or already closed")
    } else {
        for (const cartItem of cart.CartItems) {
            const storageItem = await StorageProductList.findOne({
                where: {
                    storage_id: cartItem.dataValues.storageId,
                    product_attributes_id: cartItem.dataValues.productAttributesId,
                }
            })
            if (!storageItem || storageItem.dataValues.quantity < cartItem.dataValues.quantity) {
                responseService.sendErrorResponse(res, "Not enough products in the store")
                break
            }
        }

        await Cart.update({
            closed: new Date()
        }, {
            where: {id: id}
        })

        for (const cartItem of cart.CartItems) {
            const storageItem = await StorageProductList.findOne({
                where: {
                    storage_id: cartItem.dataValues.storageId,
                    product_attributes_id: cartItem.dataValues.productAttributesId,
                }
            })
            const updValue = storageItem.dataValues.quantity - cartItem.dataValues.quantity

            await StorageProductList.update({
                quantity: updValue
            }, {
                where: {
                    storage_id: cartItem.dataValues.storageId,
                    product_attributes_id: cartItem.dataValues.productAttributesId,
                }
            })


        }

    }

    responseService.sendSuccessResponse(
        res,
        "Ok",
    )
}


module.exports = closeCartController