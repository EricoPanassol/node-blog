const mongoose = require('mongoose'); // mongoDB connection
require('dotenv').config(); // environment variables

const mongoDBConnection = process.env.MONGO_URI;

mongoose.set('strictQuery', false);
mongoose.connect(mongoDBConnection, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB!');
});

module.exports = db;
