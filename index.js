const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
// Get the package's dist directory dynamically
const reactAppPath = path.dirname(require.resolve("@delesslin/portfolio/package.json"));

// Serve the static files from the package
app.use(express.static(path.join(reactAppPath, "dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(reactAppPath, "dist", "index.html"));
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
