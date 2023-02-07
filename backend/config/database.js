//const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');



const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
        }).then(con => {
        console.log(`MongoDB Database connceted with host: ${con.connection.host}`)
    })
}

module.exports = connectDatabase