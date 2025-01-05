const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://Srajit:Srajit@cluster0.ba4n2.mongodb.net mern-rooms/';

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection;

connection.on('error', () => {
    console.log('Mongo DB connection Failed');
});

connection.on('connected', () => {
    console.log('Mongo DB connection Successful');
});

// Export mongoose
module.exports = mongoose;
