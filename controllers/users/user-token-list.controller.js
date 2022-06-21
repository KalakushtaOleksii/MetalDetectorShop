const { User } = require('../../database/models')
const { responseService } = require('../../services')
const jwt = require('jsonwebtoken')
const md5 = require("md5");


//TODO - make correct naming
async function userTokenListController(reg, res){
   try {
       const result = await User.findOne({
           where: {id: reg.user.id}
       })
       res.json(result)

   }catch (e){
       console.log(e)
   }
}

module.exports = userTokenListController