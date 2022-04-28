const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: true }))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})