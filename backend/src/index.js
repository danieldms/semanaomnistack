const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://mongo-db:QFSzY4THNgOynfIQ@cluster0-sm5w5.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.get('/', (req, res) => {
    return res.send("Hello world");
});

app.listen(3000);