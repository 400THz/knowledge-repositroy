const mongoose = require("mongoose");


const DB = "mongodb+srv://himadri:edward123@cluster0.pvufh.mongodb.net/mernstack?retryWrites=true&w=majority"
// const DB = process.env.DATABASE


mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));