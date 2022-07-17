const mongoose = require("mongoose");

const docSchema = new mongoose.Schema({
    document_name:{
        type: String,
        required: true
    },
    publication: {
        type: Number,
        required: true
    },

    document_validity:{
        type: Number,
        required: true
      
    },
    description:{
        type: String,
        required: true
    }
});

const documents= new mongoose.model("documents", docSchema);

module.exports = documents;