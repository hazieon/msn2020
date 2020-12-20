const express = require("express");
const app = express();
const http = require("http").Server(app);
const PORT = process.env.PORT || 3000;
const io = require("socket.io")(http, {
  pingTimeout: 60000,
});
const path = require("path");

//Serve public directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, +"public/index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("message", (message) => {
    console.log("message: " + message.content);
    //Broadcast the message to everyone
    io.emit("message", message);
  });
});

http.listen(PORT, () => {
  console.log("listening on port");
});
