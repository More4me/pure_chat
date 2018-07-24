const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const path = require('path');
const bootstrap = require('bootstrap');
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');

app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,'index.html'));
});

server.listen(port, ()=> {
    console.log(`listening on port ${port}`);
    io.on('connection', (socket) => {
        console.log("new user was connected");
        socket.emit('news', { hello: 'world' });
        socket.on('my other event', function (data) {
          console.log("my other event",data);
        });
      });
});

