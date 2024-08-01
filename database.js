const mongoose = require('mongoose');
require('dotenv').config()

// mongodb connection
mongoose
    .connect(process.env.MONGO_DB_AUTH)
    .then(() => console.log("connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

module.exports = mongoose;
