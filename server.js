const express = require('express');
const mongoose = require('mongoose');


const app = express();

//routes
app.get('/', (req, res)=>{
    res.send('Hello Node API');
});

app.get('/blog', (req, res)=>{
    res.send('Hello Blog');
});




mongoose.
connect('mongodb+srv://admin:123456admin@cluster0.g7kuw.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    
    console.log('connected to MongoDB');

    app.listen(3000, ()=>{
        console.log('Node API app is running on port 3000');
    });
    
}).catch((error)=>{
    console.log(error);
});