const { User, Cart, CartItem, Product, ProductPrice, ProductAttribute } = require('../../database/models')
const {Op} = require("sequelize")
const cartResponseToCartDtoMapper = require('../../mappers/cart-response-to-cart.dto.mapper')

async function getCartController(reg, res){
    const {
        email,
    } = reg.body

    const user = await User.findOne({
        where: {email: email}
    })

    if (!user) {
        responseService.sendErrorResponse(res, "User not exist")
    } else {
        const cart = await Cart.findOne({
            where: {
                user_id: user.dataValues.id,
                closed: null
            },
            include: [
                {
                    model: CartItem,
                    where: {quantity: {[Op.gt]: 0}},
                    include: [
                        {
                            model: ProductAttribute,
                            include: [
                                {
                                    model: ProductPrice,
                                    order: [['date', 'DESC']],
                                },
                                Product
                            ]
                        },
                        ]
                },
            ]
        })

        res.render('get-cart', cartResponseToCartDtoMapper(cart))
    }
}

module.exports = getCartController