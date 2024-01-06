import { createServer } from "http"
import { Server } from "socket.io"

const httpServer = createServer()

const client = "http://localhost:5500"
const io = new Server(httpServer, {
  cors: {
    origin: client
  }
})

io.on("connection", (socket) => {
  socket.on('ping', (d) => {
    console.info(d)
  })
  socket.send(
    {
      "messageFrom": "server"
    }
  )
  console.info("Live connection")
})


httpServer.listen(4000, () => console.info("http server on!") )