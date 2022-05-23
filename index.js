const express = require('express')
const { initUserRoutes, initProductCategoryRoutes} = require("./routes")
const initCountryRoutes = require('./routes/country.routes')
const initTrademarkRoutes = require('./routes/trademark.routes')
const initFrequencyRoutes = require('./routes/frequency.routes')
const initProductRoutes =require('./routes/product.routes')
const initStorageRoutes = require('./routes/storage.routes')
const initStorageProductListRoutes = require('./routes/storage_product_list.routes')
const initProductAttributesRoutes = require('./routes/product_attributes.routes')

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
initStorageRoutes(app)
initStorageProductListRoutes(app)
initProductAttributesRoutes(app)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})