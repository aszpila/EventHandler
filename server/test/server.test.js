process.env.NODE_ENV = 'test';

let mongoose = require('mongoose');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

let server = require('../server');
const event = require('../models/event');

chai.use(chaiHttp);
describe('event', () => {
    beforeEach((done) => {
        event.remove({}, (err) => {
            done();
        });
    });

    describe('Event', () => {
        let event = {}
        it('should not be added without first name provided', (done) => {
            event = {
                lastName: "Kowalski",
                email: "jan@gmail.com",
                eventDate: "2018-09-18T22:00:00.000Z"
            }
            chai.request(server)
                .post('/api/event')
                .send(event)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success').eql(false);
                    res.body.should.have.property('error');
                    res.body.error.errors.should.have.property('firstName');
                    res.body.error.errors.firstName.should.have.property('kind').eql('required');
                    done();
                });
        });
        it('should not be added without last name provided', (done) => {
            event = {
                firstName: "Jan",
                email: "jan@gmail.com",
                eventDate: "2018-09-18T22:00:00.000Z"
            }
            chai.request(server)
                .post('/api/event')
                .send(event)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success').eql(false);
                    res.body.should.have.property('error');
                    res.body.error.errors.should.have.property('lastName');
                    res.body.error.errors.lastName.should.have.property('kind').eql('required');
                    done();
                });
        });
        it('should not be added without email provided', (done) => {
            event = {
                firstName: "Jan",
                lastName: "Kowalski",
                eventDate: "2018-09-18T22:00:00.000Z"
            }
            chai.request(server)
                .post('/api/event')
                .send(event)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success').eql(false);
                    res.body.should.have.property('error');
                    res.body.error.errors.should.have.property('email');
                    res.body.error.errors.email.should.have.property('kind').eql('required');
                    done();
                });
        });
        it('should not be added without event date provided', (done) => {
            event = {
                firstName: "Jan",
                lastName: "Kowalski",
                email: "jan@gmail.com"
            }
            chai.request(server)
                .post('/api/event')
                .send(event)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success').eql(false);
                    res.body.should.have.property('error');
                    res.body.error.errors.should.have.property('eventDate');
                    res.body.error.errors.eventDate.should.have.property('kind').eql('required');
                    done();
                });
        });
        it('should be added successfully with all required data provided', (done) => {
            event = {
                firstName: "Test",
                lastName: "Testowy",
                email: "tester@gmail.com",
                eventDate: "2018-12-18T22:00:00.000Z"
            }
            chai.request(server)
                .post('/api/event')
                .send(event)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success').eql(true);
                    res.body.should.have.property('addedEvent');
                    res.body.addedEvent.should.have.property('firstName').eql('Test');
                    res.body.addedEvent.should.have.property('lastName').eql('Testowy');
                    res.body.addedEvent.should.have.property('email').eql('tester@gmail.com');
                    res.body.addedEvent.should.have.property('eventDate').eql('2018-12-18T22:00:00.000Z');
                    done();
                });
        });
    });
});