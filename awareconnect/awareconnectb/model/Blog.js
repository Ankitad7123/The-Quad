const mongoose = require("mongoose");

const Blogschema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    categories: {
        type: String,
        required: false,

    }

}, { timestamps: true });

const blogSchema1 = mongoose.model("blogSchema1", Blogschema);

module.exports = blogSchema1;