import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchEvent } from '../../redux/actions/event';

import './styles.scss';

class Events extends Component {
    constructor(){
        super();
        this.state = { events: []}
    }
    componentDidMount(){
        this.props.getEvent();
    }
    render() {
        return (
        <div>
        {
            this.props.events.map(event =>
            (            
                <h2>{`Users ${this.props.event}`}</h2>
            ))
        }
        </div>
        );
    }
}

Events.propTypes = {
    events: PropTypes.arrayOf(PropTypes.object).isRequired,
    isFetching: PropTypes.bool,
    getEvent: PropTypes.func.isRequired,
  };
  
  Events.defaultProps = {
    isFetching: false,
  };
  
  const mapStateToProps = state => ({
    events: state.event.event,
    isFetching: state.event.isFetching,
  });
  
  const mapDispatchToProps = dispatch => ({
    getEvent: () => dispatch(fetchEvent()),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Events);
  