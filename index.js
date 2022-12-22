const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const server = require("http").createServer(app);



app.get("/", (req,res)=>{
    res.send("Hello nodejs");
});




server.listen(port, (req, res) => {
    console.log("Server is runing port: " + port);
})