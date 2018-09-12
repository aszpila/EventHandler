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
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';

import { addEvent } from '../redux/actions/event';
import { togglePopup } from '../redux/actions/ui';
import Popup from '../components/Popup';

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
    return (
      <div>
        { this.props.isPopupOpen && 
          <Popup title="Added data" data={this.props.event} close={this.props.togglePopup} isFetching={this.props.isFetching}/>
        }
        <Row className="row">
          <Col md="6">
            <Card>
              <CardHeader>
                <strong>Insert Data</strong> below
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                  <Col md="3">
                    <Label for="exampleEmail">First name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input valid value={this.state.value} placeholder="first name"
                        onChange={(event) => this.setState({firstName: event.target.value})}/>
                      {/* <FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>*/}
                      <FormText>Please enter your first name</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Last name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="text-input" name="text-input" placeholder="last name" 
                        valid onChange={(event) => this.setState({lastName: event.target.value})}/>
                      <FormText className="help-block">Please enter your last name</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Email</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="email" name="email" placeholder="email" 
                        onChange={(event) => this.setState({email: event.target.value})}/>
                      <FormText className="help-block">Please enter your email address</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Event date</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="date-input" placeholder="event date" 
                        onChange={(event) => this.setState({eventDate: event.target.value})}/>
                      <FormText className="help-block">Please select date</FormText>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="send-button" color="primary" onClick={this.handleOnClick}>Send data</Button>
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