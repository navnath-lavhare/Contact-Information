const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const contactsRouter = require('./routes/contacts');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Yuvraj:'+process.env.MONGO_ATLAS_PW+'@cluster0-s5nqy.mongodb.net/contact-information?retryWrites=true&w=majority')
.then(() => {
    console.log('!!! Connected to the database !!!!');
})
.catch(() => {
    console.log('coonection failed');
})

app.use(bodyParser.json());
// app.use("/images", express.static(path.join("images")));
app.use("/", express.static(path.join(__dirname,"angular")));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});

app.use('/api/contacts', contactsRouter);
app.use((req, res, next) =>{
    res.sendFile(path.join(__dirname, 'angular', 'index.html'));
})

module.exports = app;