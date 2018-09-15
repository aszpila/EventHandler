import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  Row,
} from 'reactstrap';

import { addEvent } from '../redux/actions/event';
import { togglePopup } from '../redux/actions/ui';
import Popup from './Popup';
import FormGroupItem from './FormGroup';

class DataForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      eventDate: '',
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.addEvent(this.state.firstName, this.state.lastName, this.state.email, this.state.eventDate);
    this.props.togglePopup();
  }

  render() {
    const { firstName, lastName, email, eventDate } = this.state;

    const isEnabled =
      email.length > 0 &&
      eventDate.length > 0 &&
      firstName.length > 0 &&
      lastName.length > 0;

    return (
      <div>
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
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroupItem
                    label="First name"
                    text="Please enter your first name"
                    name="firstName"
                    type="text"
                    pattern="/^[a-z ,.'-]+$/i"
                    placeholder="first name"
                    onChange={(event) => this.setState({ firstName: event.target.value })}
                  />
                  <FormGroupItem
                    label="Last name"
                    text="Please enter your last name"
                    name="lastName"
                    type="text"
                    pattern="/^[a-z ,.'-]+$/i"
                    placeholder="last name"
                    onChange={(event) => this.setState({ lastName: event.target.value })}
                  />
                  <FormGroupItem
                    label="Email address"
                    text="Please enter your email address"
                    name="email"
                    type="email"
                    placeholder="email address"
                    onChange={(event) => this.setState({ email: event.target.value })}
                  />
                  <FormGroupItem
                    label="Event date"
                    text="Please select event date"
                    name="date"
                    type="date"
                    placeholder="event date"
                    onChange={(event) => this.setState({ eventDate: event.target.value })}
                  />
                </Form>
              </CardBody>
              <CardFooter>
                <Button disabled={!isEnabled} className="send-button" color="primary" onClick={this.handleOnClick}>
                  Send data
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

DataForm.propTypes = {
  event: PropTypes.object.isRequired,
  isFetching: PropTypes.bool,
  addEvent: PropTypes.func.isRequired,
  isPopupOpen: PropTypes.bool.isRequired,
  togglePopup: PropTypes.func.isRequired,
};

DataForm.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(DataForm);