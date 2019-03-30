const express = require("express");
const path = require("path");

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/public")));

// An api endpoint that returns all cards
app.get("/api/cards", (req, res) => {
    var cards = ["item1", "item2", "item3"];
    res.json(cards);
    console.log("Sent list of items");
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

const port = 5000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
