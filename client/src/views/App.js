import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AvForm } from 'availity-reactstrap-validation';
import DatePicker from 'react-datepicker';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  FormGroup,
  FormText,
  Label,
  Row
} from 'reactstrap';

import { addEvent } from '../redux/actions/event';
import { togglePopup } from '../redux/actions/ui';
import Popup from '../components/Popup';
import FormGroupItem from '../components/FormGroup';
import '../styles/App.css';
import validation from '../utils/validation';
import 'react-datepicker/dist/react-datepicker.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      eventDate: '',
    };
    this.handleSend = this.handleSend.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.isEnabled = this.isEnabled.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSend() {
    this.props.addEvent(this.state.firstName, this.state.lastName, this.state.email, this.state.eventDate);
    this.props.togglePopup();
  }

  handleReset() {
    this.setState({ firstName: '', lastName: '', email: '', eventDate: '' })
  }

  isEnabled() {
    const { firstName, lastName, email, eventDate } = this.state;
    if (validation.validateEmail(email).length > 0 &&
      validation.validateName(firstName).length > 0 &&
      validation.validateName(lastName).length > 0 &&
      eventDate !== '') {
      return true;
    }
  }

  handleChange (date) {
    this.setState({ eventDate: date })
    console.log('date', this.state.eventDate);
  }

  render() {
    const enabled = this.isEnabled();
    return (
      <div className="app">
        <div className="app-body">
          {
            this.props.isPopupOpen &&
            <Popup title="Added data" data={this.props.event} close={this.props.togglePopup} isFetching={this.props.isFetching} />
          }
          <Row className="row">
            <Col md="6">
              <Card>
                <CardHeader>
                  <strong>Insert Data </strong>below
              </CardHeader>
                <CardBody>
                  <AvForm onReset={this.handleReset} encType="multipart/form-data" className="form-horizontal">
                    <FormGroupItem
                      label="First name"
                      name="firstName"
                      type="text"
                      pattern="/^[a-z ,.'-]+$/i"
                      placeholder="first name"
                      value={this.state.firstName}
                      onChange={(event) => this.setState({ firstName: event.target.value })}
                    />
                    <FormGroupItem
                      label="Last name"
                      name="lastName"
                      type="text"
                      pattern="/^[a-z ,.'-]+$/i"
                      placeholder="last name"
                      value={this.state.lastName}
                      onChange={(event) => this.setState({ lastName: event.target.value })}
                    />
                    <FormGroupItem
                      label="Email address"
                      name="email"
                      type="email"
                      placeholder="email address"
                      value={this.state.email}
                      onChange={(event) => this.setState({ email: event.target.value })}
                    />
                    <FormGroup row>
                      <Col md="9">
                        <Label className="event-label">Event date</Label>
                        <FormText>Please select event date</FormText>
                      </Col>
                      <DatePicker
                        inline
                        selected={this.state.eventDate}
                        onChange={(event) => this.setState({ eventDate: event })}
                        onSelect={(event) => this.setState({ eventDate: event })}
                      />
                    </FormGroup>
                  </AvForm>
                </CardBody>
                <CardFooter>
                  <Button disabled={!enabled} className="send-button" color="primary" onClick={this.handleSend}>
                    Send data
                </Button>
                  <Button className="send-button" color="danger" onClick={this.handleReset}>
                    Reset form
                </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  event: PropTypes.object.isRequired,
  isFetching: PropTypes.bool,
  addEvent: PropTypes.func.isRequired,
  isPopupOpen: PropTypes.bool.isRequired,
  togglePopup: PropTypes.func.isRequired,
};

App.defaultProps = {
  isFetching: false,
};

const mapStateToProps = state => ({
  event: state.event.addedEvent,
  isFetching: state.event.isFetching,
  isPopupOpen: state.ui.isPopupOpen,
});

const mapDispatchToProps = dispatch => ({
  addEvent: (firstName, lastName, email, eventDate) => dispatch(addEvent(firstName, lastName, email, eventDate)),
  togglePopup: () => dispatch(togglePopup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);