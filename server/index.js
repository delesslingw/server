const express = require("express");

const app = express();

app.get("/", (req, res) => {
    console.log("Received request.");
    res.send("Tanake manu V2");
});

app.listen(3000, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Listening at http://localhost:${3000}`);
});
