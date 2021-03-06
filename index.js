const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./route')
const mongoose = require('mongoose')

// Connect MongoDB
mongoose.connect('mongodb://localhost:27017/mobile-legend-heroes')
mongoose.Promise = global.Promise

// Root Route
app.get('/api', function(req, res){
     res.end('403 Forbidden')
})

// Initial Body Parser
app.use(bodyParser.json())

// Initial Route
app.use('/api', router)

//Middleware Error
app.use(function(err, req, res, next){
    res.status(422).send({ message: err.message })
})

app.listen(process.env.port || 2019, function(){
    console.log('Server Berhasil Dibuat')
});
