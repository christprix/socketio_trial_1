const fs = require("fs");
const express = require('express');
const app = express();
const port = 4000;
const path = require('path');
const key = fs.readFileSync('cert.key');
const cert = fs.readFileSync('cert.crt');
const server = require('https').createServer({ key, cert }, app);
const io = require('socket.io')(server)

app.use(express.static(__dirname))


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// io.on("connection", (socket) => {
//   console.log("You connected!");
// })

server.listen(port, () => {
  console.log(`App is listening on ${port}!`);
})
