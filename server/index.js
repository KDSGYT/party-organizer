const app = require('express')()
const http = require('http').createServer(app);
const CORS = require('cors');
const io = require('socket.io')('http://localhost:8080');

// app.use(CORS());
// app.use((req, res) => {
//     // socket.open();
//     // // console.log(req)
//     console.log("Working");
// })

io.on('connnection', (socket) => console.log("A user connected:-"));




// app.get('/backend', (req, res) => {
//     res.send('Working');
//     res.end();
// })

// ap.listen(PORT, () => console.log(`Listening on port..${PORT}`));
http.listen(PORT , () => {
    console.log('listening on *:8080');
  });

