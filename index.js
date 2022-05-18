const express = require('express')
const { initUserRoutes } = require("./routes");

const app = express()
const port = 3003

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

initUserRoutes(app)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})