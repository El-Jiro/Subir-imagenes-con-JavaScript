const express = require('express')
const bodyParser = require('body-parser')
const port = 8000
const app = express()


app.use(express.json())
app.use('/public', express.static(`${__dirname}/public`))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})

app.get(['/', 'index.html'], (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})