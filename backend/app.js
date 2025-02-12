const express = require("express");
const app = express();
require("./connection/db");

app.get("/", (req, res)=>{
    res.send("hello world");
});

app.listen(2000, () => {
    console.log("server is running on port 2000");
})