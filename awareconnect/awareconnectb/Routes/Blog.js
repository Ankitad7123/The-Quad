const express = require("express");
const router = express.Router();
const blogSchema = require("../model/Blog");

router.post("/", async (req, res) => {
    try {
        const { title, desc, photo, username, categories, timestamps } = req.body;



        const result = new blogSchema({ title, desc, photo, username, categories, timestamps });
        await result.save();


        res.status(201).json(result);
    } catch (error) {
        console.error(error);


        res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/", async (req, res) => {
    try {
        const result = await blogSchema.find({});


        res.json(result);
    } catch (error) {
        console.error(error);


        res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const result1 = await blogSchema.findById(req.params.id);
        res.json(result1);
    } catch (error) {
        console.log(error);

    }
})

router.delete("/:id", async (req, res) => {
    try {
        await blogSchema.findByIdAndDelete(req.params.id);
        res.json(blogSchema);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
