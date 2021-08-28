const model = require('./model');

const router = require('express').Router()

// get user 

router.get("/", async (req, res) => {
    try{
        const data = await model.find()
        res.json(data)
    }
    catch(err) {
        res.send("err" + err)
    }
})

// add user

router.post("/", async (req, res) => {
    console.log("req", req.body)
    const newData = new model({
        name  : req.body.name,
        email : req.body.email
    })
    try{
        const data = await newData.save()
        res.json(data)
    }
    catch(err) {
        res.send("err" + err)
    }
})


module.exports = router ;