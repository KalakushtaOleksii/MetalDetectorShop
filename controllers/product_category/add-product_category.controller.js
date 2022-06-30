const { ProductCategory } = require('../../database/models')
const { responseService, } = require('../../services')

async function addProductCategoryController(reg, res) {
    const {
        desc,
        name,
    } = reg.body


    try {
        await ProductCategory.create({
            desc,
            name,
        })

        responseService.sendSuccessResponse(res, {
                desc,
                name,
            },
            201,
        )
    } catch (e) {
        return res.status(400).json({message:'Категорія не добавлена'})
    }
}

module.exports = addProductCategoryController