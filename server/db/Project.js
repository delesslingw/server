const mongoose = require("mongoose");

const Project = mongoose.model("Project", {
    title: String,
    short: String,
    long: String,
    start: Date,
    end: Date,
});
module.exports = Project;
