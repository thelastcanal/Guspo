const express = require("express");
const path = require("path");
const result = require("dotenv").config();

const app = express();

// Checks for .env errror
if (result.error) {
    throw result.error;
}

console.log(result.parsed);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/public")));

// Test cards api
app.get("/api/cards", (req, res) => {
    var cards = ["item1", "item2", "item3"];
    res.json(cards);
    console.log("Sent list of items");
});

// Handles all other requests
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

const port = 5000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
