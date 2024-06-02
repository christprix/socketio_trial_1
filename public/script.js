const socket = io()

socket.on("connect", () => {
  console.log(socket.id);
})

const form = document.querySelector("#messagebox")
message = document.getElementById('messageinput');
const chatbox = document.querySelector("#chatbox");

form.addEventListener("submit", e => {
  e.preventDefault();
  message = message.value;
  console.log(message);
  let li = document.createElement('li');
  li.innerHTML = message;
  chatbox.appendChild(li)
  socket.emit("send-message", message)
  message = " "
});
