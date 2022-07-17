require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const documents = require("./models/docSchema");
const cors = require("cors");
const router = require("./routes/router");

// const port = 3000;
const port = process.env.PORT || 8003;



app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("server start")
})

app.use(router);

app.listen(port, () => {
    console.log(`server has started at port number ${port}`);
});