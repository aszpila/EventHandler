const express = require('express');
const mongoose = require('mongoose');
const Event = require('./api/models/event');

const app = express();
// mongoose.connect('mongodb+srv://user1:<mongodb>@aszpila-787ni.mongodb.net/test?retryWrites=true');
mongoose.connect("mongodb://localhost:27017/aszpila", { useNewUrlParser: true });

app.post('/api/event', (req, res, next) => {
    const event = new Event({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        eventDate: req.body.eventDate
    });
    event.save().then(result => {console.log(result);}).catch(err => console.log(err));
    res.status(201).json({
        message: 'success',
        addedEvent: event
    })
});

app.get('/api/event', (req, res) => {
    const events = [
        {   
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            eventDate: req.body.eventDate
        }];
        res.json(events);
    }
)

app.listen(9000);