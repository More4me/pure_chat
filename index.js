const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const expressJoi = require('express-joi');
const router=require('./router')(app);
const port = process.env.PORT || 3000;
const Joi = expressJoi.Joi;




// socket=io.connect('http://localhost:3000');
// app.get('/change_username', (req,res,next)=>{
    
// });



var getUsersSchema = {
    limit: expressJoi.Joi.types.Number().integer().min(1).max(25),
    offset: expressJoi.Joi.types.Number().integer().min(0).max(25),
    name: expressJoi.Joi.types.String().alphanum().min(2).max(25)
  };

mesage=[]




server.listen(port, ()=> {
    console.log(`listening on port ${port}`);
    io.on('connection', (socket) => {
        console.log("new user was connected");
        
        socket.username="Anoymous";
        console.log("userName ",socket.username);
        socket.on('change_username',(data)=> {
            socket.username = data.username;
            console.log("userName ",socket.username);
        });
        // socket.emit('news', { hello: 'world' });
        // socket.on('my other event', function (data) {
        //   console.log("my other event",data);
        // });
      });
});

