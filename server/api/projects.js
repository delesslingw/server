const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("GET: all");
});
router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`GET: ${id}`);
});
router.post("/", (req, res) => {
    res.send("POST projects");
});
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`DELETE: ${id}`);
});
router.put("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`PUT: ${id}`);
});
module.exports = router;
