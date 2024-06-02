const fs = require("fs");
const express = require('express');
const app = express();
const port = 4000;
const path = require('path');
const key = fs.readFileSync('./certs/cert.key');
const cert = fs.readFileSync('./certs/cert.crt');
app.use(express.static(path.join(__dirname, 'public')));
const server = require('https').createServer({ key, cert }, app);
const io = require('socket.io')(server)



// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, 'public'));
// });

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("send-message", message => {
    console.log(message);
  })
})



server.listen(port, () => {
  console.log(`App is listening on ${port}!`);
})
