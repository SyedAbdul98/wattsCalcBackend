const Watts = require("../schems")


const getWatts = async () => {
    const res = await Watts.find({})
    console.log(res)
    return res
}

module.exports = getWatts;