const express = require("express");
const path = require("path");
const result = require("dotenv").config();
const axios = require("axios");

const app = express();

// Checks for .env errror
if (result.error) {
    throw result.error;
}

// console.log(result.parsed);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/public")));

getPosts = async () => {
    try {
        const postList = await axios.get(
            "https://api.hearthstonejson.com/v1/29349/enUS/cards.collectible.json"
        );
        return postList;
    } catch (err) {
        console.log(err);
    }
};

// Test cards api
app.get("/api/cards", async (req, res) => {
    let posts = await getPosts();
    res.json(posts.data);
    console.log("Sent list of posts");
});

// Handles all other requests
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

const port = 5000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
