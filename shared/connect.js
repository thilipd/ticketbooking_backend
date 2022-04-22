const mongoose = require('mongoose')

const mongoURL = 'mongodb+srv://thilip:CWwuX26dW*Bu2c2@cluster0.1eefy.mongodb.net/booking'

mongoose.connect(mongoURL);

let connection = mongoose.connection

connection.on('error', () => {
    console.log('Mongo not connected')
})

connection.on('connected', () => {
    console.log('Mongo  connected')
})


module.exports = mongoose