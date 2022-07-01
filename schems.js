const mongoose = require("mongoose")


const wattsArray = mongoose.Schema({
    watts : [Number]
})

const Watt = mongoose.model("Watts", wattsArray)

module.exports = Watt