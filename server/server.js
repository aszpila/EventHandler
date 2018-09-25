const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Event = require('./models/event');

const app = express();

if (process.env.NODE_ENV == 'test') {
    mongoose.connect('mongodb://mo1207_db_test:DznpBGL5MnTImCeHb3RE@mongo16.mydevil.net:27017/mo1207_db_test', { useMongoClient: true });
} else {
    mongoose.connect('mongodb://mo1207_database:qtkEPvHqcRf29CqAgSYu@mongo16.mydevil.net:27017/mo1207_database', { useMongoClient: true }); 
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

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

            res.status(200).json({
                success: true,
                addedEvent: event
            });

        })
        .catch(error => {
            res.status(400).json({
                success: false,
                error: error
            });
        });
});

module.exports = app.listen(5000);