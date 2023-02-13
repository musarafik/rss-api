const express = require("express");

const app = express();
const PORT = process.env.NODE || 3000;

const rssRouter = require("./routes/rssRouter");

app.use("/feed", rssRouter);

app.get("/", (req, res) => {
    res.status(200).send("Hello world");
});

app.listen(PORT, (err) => {
    if(!err){
        console.log("Server is successfully running and app is listening on port " + PORT);
    }
    else{
        console.log("Error occurred, server can't start", err);
    }
});