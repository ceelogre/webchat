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

const port = 4000
httpServer.listen(port, () => console.info("http server on!") )