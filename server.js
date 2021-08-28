const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.port || 3000;

const mongoose = require("mongoose");
mongoose.Promise = Promise;

// mongoose connection

const DB = `mongodb://localhost/testAPi`
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connected Successfully")
}).catch((err) => console.log("Error :", err))


const Api = require('./routes');

// app.use 

app.use(express.json());
app.use(bodyParser.json());
app.use('/user', Api)

// listening port

app.listen(port, err => {
    if (err) {
        return console.log("ERROR", err);
    }
    console.log(`Listening on port ${port}`);
});