const express = require('express')
const app = express()
const mongoose = require('mongoose');

const uri = "mongodb+srv://karthikarun063:Arunkarthik%40001@backenddb.2qdic.mongodb.net/BackendDB?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database is connected");
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
        
        app.get('/', (req, res) => {
            res.send('Hello from Node Server! Is this still working');
        });
    })
    .catch((err) => {
        console.error("Database is not connected", err);
    });



