const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });
app.use(cors());
app.use(express.json());
app.use(require("./middleware/errorHandler"));
io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("disconnect", () => console.log("Client disconnected"));
});
app.get("/", (req, res) => res.send("API Running"));

server.listen(5000, () => console.log("Server running on port 5000"));
