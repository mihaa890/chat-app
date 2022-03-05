const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http , {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    }
  });


const PORT = 8080;

http.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

io.on("connection", (socket) => {
  console.log(`Client ${socket.id} connected`);

  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  socket.on("disconnect", () => {
    console.log(`Client ${socket.id} diconnected`);
    socket.leave(roomId);
  });
});

