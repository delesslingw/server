require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const api = require("./api");
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((e) => console.error(`MongoDB connection error`, e));

app.use("/", api);

app.listen(3000, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Listening at http://localhost:${3000}`);
});
