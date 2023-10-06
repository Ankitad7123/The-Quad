const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const router1 = require("./Routes/Blog")

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/mern4")
    .then(() => { console.log("the database is connected") })
    .catch((err) => { console.log(err) });

app.use("/post", router1);



app.listen(3001, () => {
    console.log("port number is 3001");
})