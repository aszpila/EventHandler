import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-advanced';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: true };
    }

    render() {
        const loader = <div className="popup-loader" />;

        const { data, title, close } = this.props;
        return (
            <div>
                <Modal isOpen={this.state.open} toggle={close}>
                    <ModalHeader toggle={close}>{title}</ModalHeader>
                    <Loader show={this.props.isFetching} message={loader} backgroundStyle={{ backgroundColor: 'white' }} priority={1} hideContentOnLoad>

                    <ModalBody>
                        <p>First name: {data.firstName}</p>
                        <p>Last name: {data.lastName}</p>
                        <p>Email: {data.email}</p>
                        <p>Event date: {new Date(data.eventDate).toLocaleString()}</p>
                    </ModalBody>
                    </Loader>

                    <ModalFooter>
                        <Button color="primary" onClick={close}>OK</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

Popup.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    close: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
};

export default Popup;
