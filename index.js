const express = require('express')
const { initUserRoutes, initProductCategoryRoutes} = require("./routes")
const initCountryRoutes = require('./routes/country.routes')
const initTrademarkRoutes = require('./routes/trademark.routes')
const initFrequencyRoutes = require('./routes/frequency.routes')
const initProductRoutes =require('./routes/product.routes')

const app = express()
const port = 3003

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

initUserRoutes(app)
initCountryRoutes(app)
initTrademarkRoutes(app)
initFrequencyRoutes(app)
initProductCategoryRoutes(app)
initProductRoutes(app)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})