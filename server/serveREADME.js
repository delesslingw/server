const fs = require("fs").promises;
const showdown = require("showdown");
const converter = new showdown.Converter({
    simplifiedAutoLink: true,
    tasklists: true,
});
const serveREADME = async (req, res) => {
    const text = await fs.readFile("../README.md", "utf-8");
    const html = converter.makeHtml(text);
    res.send(html);
};

module.exports = serveREADME;
