const express = require('express')
const { initUserRoutes } = require("./routes")
const initCountryRoutes = require('./routes/country.routes')
const initTrademarkRoutes = require('./routes/trademark.routes')
const initFrequencyRoutes = require('./routes/frequency.routes')

const app = express()
const port = 3003

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

initUserRoutes(app)
initCountryRoutes(app)
initTrademarkRoutes(app)
initFrequencyRoutes(app)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})