const { CartItem, User, Cart, ProductAttribute, StorageProductList} = require('../../database/models')
const { responseService, } = require('../../services')

async function addCartItemController(reg, res) {
    const {
        email,
        storageId,
        productAttributesId,
        quantity,
    } = reg.body


    try {
        //TODO - change email to user token
        const cartId = await User.findOne({
            where: {email: email}
        })
            .then(async (user) => {
                const cart = await Cart.findOne({
                    where: {
                        user_id: user.dataValues.id,
                        closed: null
                    }
                })
                if (cart != null) {
                    return cart.dataValues.id
                } else  {
                    const createCart = await Cart.create({
                        userId: user.dataValues.id,
                    })
                    return createCart.dataValues.id
                }
            })

        const attributes = await StorageProductList.findOne({
            where: {
                product_attributes_id: productAttributesId,
                storage_id: storageId
            }
        })

        let result

        if (!attributes || attributes.dataValues.quantity < quantity) {
            //TODO - change to status(..).json()
            responseService.sendErrorResponse(res, "Not enough products in storage")
        } else {
            result = await CartItem.create({
                cartId: cartId,
                storageId: storageId,
                productAttributesId: productAttributesId,
                quantity: quantity,
            })
        }



        responseService.sendSuccessResponse(res, result,
            201,
        )
    } catch (e) {
        //TODO - change to status(..).json()
        responseService.sendErrorResponse(res, e)
    }
}

module.exports = addCartItemController