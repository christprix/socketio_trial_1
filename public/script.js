const socket = io()

socket.on("connect", () => {
  console.log(socket.id);
})

const form = document.querySelector("#messagebox")
message = document.getElementById('messageinput');
const chatbox = document.querySelector("#chatbox");

form.addEventListener("submit", e => {
  e.preventDefault();
  sendingMessage = message.value;
  console.log(sendingMessage);
  socket.emit("send-message", sendingMessage)
  message.value = ""
});
