const Watts = require("../schems")
const express = require ("express")
const router = express.Router()


router.post("/", async (req, res) => {
    const {logsArray} = req.body
    // saveWatts()
    
    const wattA = new Watts(
        {
            watts: logsArray
        }
    )

    const resp = await wattA.save()
    console.log(resp)
    // return res
    res.send(req.body)
    res.end()
})

router.get("/", async (req, res) => {
    const resp = await Watts.find({})
    console.log(resp)
    res.send(resp)
    res.end()
})


module.exports = router;
