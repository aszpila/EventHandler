import React from 'react';
import PropTypes from 'prop-types';
import { Col, Label } from 'reactstrap';
import { AvField, AvGroup } from 'availity-reactstrap-validation';

const FormGroupItem = props => (
  <div>
    <AvGroup row>
      <Col md="9">
        <Label>{props.label}</Label>
          <AvField
            name={props.name}
            type={props.type}
            pattern={props.pattern}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
          />
      </Col>
    </AvGroup>
  </div>
)

FormGroupItem.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

FormGroupItem.defaultProps = {
  pattern: null,
};

export default FormGroupItem;