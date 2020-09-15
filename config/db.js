const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

console.log('Connection ', process.env.DB_MONGO);

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
        });
        console.log('Database connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;