const express = require("express");
const fs = require("fs").promises;
const app = express();
const showdown = require("showdown");
const converter = new showdown.Converter({
    simplifiedAutoLink: true,
    tasklists: true,
});
app.get("/", async (req, res) => {
    const text = await fs.readFile("../README.md", "utf-8");
    const html = converter.makeHtml(text);
    res.send(html);
});

app.listen(3000, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Listening at http://localhost:${3000}`);
});
