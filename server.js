import app from "./src/app.js";

const PORT = 3055

const server = app.listen(PORT, () => {
    console.log(`server start at port ${PORT}`)
})

process.on('SIGINT', () => {
    server.close(() => console.log('exit server'))
    // notify
})