const mongoose = require("mongoose")

const connectDB = () => {
    mongoose.connect("mongodb://localhost/WArray")
    .then(() => console.log("Connection is Established"))
    .catch((err) => console.log(err))
}

module.exports = connectDB;

