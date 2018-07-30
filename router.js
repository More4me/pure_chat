const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const io= require('socket.io-client');

module.exports=function(app){

app.use(express.static(path.join(__dirname,'public')));

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine','ejs');

    app.post('/access_room',(req,res,next)=>{
        //TODO: Load messages
        res.render(path.join(__dirname,'views/chatRoom'));
    });

    app.get('/',(req,res,next)=> {
        res.render(path.join(__dirname,'views/index'));
        //TODO: validate room id and key
    });
    
    app.get('/change_username',(req,res,next)=>{
        console.log("res",res);
        console.log("requested to change username to ",res.body.username);
    });
    
}
