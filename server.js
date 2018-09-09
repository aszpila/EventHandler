const express = require('express');
const mongoose = require('mongoose');
const Event = require('./api/models/event');
const bodyParser = require('body-parser');

const app = express();
mongoose.connect('mongodb://user1:<mongodb>@aszpila-787ni.mongodb.net/test?retryWrites=true', {useMongoClient: true});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/api/event', (req, res, next) => {
   const event = new Event({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        eventDate: req.body.eventDate
    });
    event
        .save()
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));
    res.status(201).json({
        message: 'success',
        addedEvent: event
    });
});

app.get('/api/event', (req, res, next) => {
    const events = [
        {   
            firstName: 'name',
            lastName: 'lasrt',
            eventDate: 'date'
        }];
        res.json(events);
});

app.listen(5000);