const userControllers = require('./users')
const countryControllers = require('./country')
const trademarkControllers = require('./trademark')
const frequencyControllers = require('./frequency')



module.exports = {
    ...userControllers,
}

module.exports = {
    ...countryControllers,
}

module.exports = {
    ...trademarkControllers,
}
module.exports = {
    ...frequencyControllers,
}