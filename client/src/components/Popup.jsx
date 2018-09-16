import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-advanced';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = { open: true };
    }

    render() {
        const loader = <div className="loader" />;
        const { data, close, isFetching, success } = this.props;
        console.log(success);
        return (
            <div>
                <Modal isOpen={this.state.open} toggle={close}>
                    <ModalHeader toggle={close}>Event details</ModalHeader>
                    <Loader 
                        show={isFetching} 
                        message={loader} 
                        backgroundStyle={{ backgroundColor: 'white' }} 
                        priority={1} 
                        hideContentOnLoad>
                        { success &&
                            <ModalBody>
                                <p>First name: {data.firstName}</p>
                                <p>Last name: {data.lastName}</p>
                                <p>Email: {data.email}</p>
                                <p>Event date: {new Date(data.eventDate).toLocaleString()}</p>
                            </ModalBody>
                        }
                        { !success &&
                            <ModalBody>
                                <p>Some error occured and no event data was added.</p>
                                <p>Please try again.</p>
                            </ModalBody>
                        }
                    </Loader>
                    <ModalFooter>
                        <Button className="ok-button" color="info" onClick={close}>OK</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

Popup.propTypes = {
    data: PropTypes.object.isRequired,
    close: PropTypes.func.isRequired,
    success: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
};

export default Popup;
