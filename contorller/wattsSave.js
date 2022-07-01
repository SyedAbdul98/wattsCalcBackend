const Watts = require("../schems")

const saveWatts =  async () => {
    const wattA = new Watts(
        {
            watts: [0,0,0]
        }
    )

    const res = await wattA.save()
    console.log(res)
    return res
}

module.exports = saveWatts