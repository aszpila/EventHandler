const express = require('express');
const mongoose = require('mongoose');
const Event = require('./models/event');
const bodyParser = require('body-parser');

const app = express();
mongoose.connect('mongodb://mo1207_database:qtkEPvHqcRf29CqAgSYu@mongo16.mydevil.net:27017/mo1207_database', {useMongoClient: true});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/api/event', (req, res, next) => {
   const event = new Event({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        eventDate: req.body.eventDate
    });
    event
        .save()
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));
    res.status(200).json({
        success: true,
        addedEvent: event
    });
});

app.listen(5000);