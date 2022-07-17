const express = require("express");
const router = express.Router();
const documents = require("../models/docSchema");


// router.get("/",(req,res)=>{
//     console.log("connect");
// });

router.post("/upload", async (req, res) => {
    // console.log(req.body);
    const { document_name,  document_validity, description } = req.body;


    if (!document_name ||  !document_validity || !description) {
        res.status(422).json("Please fill the data");
    }

    try {

        const predoc = await documents.findOne({ document_name: document_name });
        console.log(predoc);

        if (predoc) {
            res.status(422).json("This document is already present");
        } else {
            const addocument = new documents({
                // name,email,age,mobile,work,add,desc
                document_name, document_validity, description
            });

            await addocument.save();
            res.status(201).json(addocument);
            console.log(addocument);
        }

    }
    catch (error) {
        res.status(422).json(error);
    }
})

//get docdata
router.get("/getdata", async (req, res) => {
    try {
        const docdata = await documents.find();
        res.status(201).json(docdata)
        console.log(docdata);
    } catch (error) {
        res.status(422).json(error);

    }
})


// view document
router.get("/getdocument/:id", async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;

        const docindividual = await documents.findById({ _id: id });
        console.log(docindividual);
        res.status(201).json(docindividual)
    } catch (error) {
        res.status(422).json(error);

    }
})

// update document data
router.patch("/updatedoc/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedocument = await documents.findByIdAndUpdate(id, req.body, {
            new: true
        });

        console.log(updatedocument);
        res.status(201).json(updatedocument);

    } catch (error) {
        res.status(422).json(error);
    }
})

// delete document
router.delete("/deletedocument/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedoc = await documents.findByIdAndDelete({ _id: id })
        res.status(201).json(deletedoc);

    } catch (error) {
        res.status(422).json(error);
    }
})


module.exports = router;