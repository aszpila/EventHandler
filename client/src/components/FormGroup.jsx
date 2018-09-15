import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  FormGroup,
  FormText,
  Label,
} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

const FormGroupItem = props => (
  <div>
    <FormGroup row>
      <Col md="3">
        <Label>{props.label}</Label>
      </Col>
      <Col xs="12" md="9">
        <AvForm>
          <AvField
            name={props.name}
            type={props.type}
            pattern={props.pattern}
            placeholder={props.placeholder}
            onChange={props.onChange}
          />
        </AvForm>
        <FormText>{props.text}</FormText>
      </Col>
    </FormGroup>
  </div>
)

FormGroupItem.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

FormGroupItem.defaultProps = {
  pattern: null,
};

export default FormGroupItem;