import { createServer } from "http"
import { Server } from "socket.io"

const httpServer = createServer()

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5500"
  }
})

io.on("connection", (socket) => {
  socket.on('ping', (d) => {
    console.info(d)
  })
  io.send(
    {
      "messageFrom": "server"
    }
  )
  console.info("Live connection")
})


httpServer.listen(4000, () => console.info("http server on!") )