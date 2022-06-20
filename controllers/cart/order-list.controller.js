const {Cart, User, CartItem, ProductAttribute, ProductPrice, Product} = require('../../database/models')
const {responseService} = require('../../services')
const {Op} = require("sequelize")
const orderResponseToOrderDtoMapper = require('../../mappers/order-response-to-order.dto.mapper')
const cartResponseToCartDtoMapper = require("../../mappers/cart-response-to-cart.dto.mapper");
const {sequelize} = require("../../database");


async function orderListController(reg, res) {
    const {
        email
    } = reg.body

    const user = await User.findOne({
            where: {email: email}
        })

        if (!user) {
            responseService.sendErrorResponse(res, "User not exist")
        } else {
            const date = new Date()
            const orders = await Cart.findAll({
                where: {
                    user_id: user.dataValues.id,
                    closed: {[Op.not]: null}
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
                                        where: {
                                            date: {[Op.lte]: date}, // sequelize.col('Cart.closed')},//sequelize.fn('date', sequelize.col('closed'))},
                                        },
                                        order: [['date', 'DESC']],
                                    },
                                        Product,
                                ]
                            },
                        ],
                    }
                ]
            })
            res.render('get-order-list', orderResponseToOrderDtoMapper(email, orders))


        //responseService.sendSuccessResponse(res, orderResponseToOrderDtoMapper(email, orders))
    }
}

module.exports = orderListController