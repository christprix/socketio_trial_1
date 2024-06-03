const socket = io()
const form = document.querySelector("#messagebox")
message = document.getElementById('messageinput');
const chatbox = document.querySelector("#chatbox");
const chatnumber = document.getElementById("chatnumber")

socket.on("connect", () => {
  console.log(socket.id);
  chatnumber.textContent = socket.id
})

socket.on("receive-message", (message) =>{
  console.log(message);
  displayMessage(message)
})

form.addEventListener("submit", e => {
  e.preventDefault();
  sendingMessage = message.value;
  
  socket.emit("send-message", sendingMessage)
  message.value = ""
});

function displayMessage(message) {
  const div = document.createElement("div")
  div.textContent = message
  chatbox.append(div)
}