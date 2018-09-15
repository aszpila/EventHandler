
import React from  'react';
import  { AvForm, AvField }  from 'availity-reactstrap-validation';

export default class Example extends React.Component {
 render() {
   return (
     <AvForm>
       <AvField name="email" label="Email" type="email" />
       <AvField name="emailProp" label="Email (validate prop)" type="text" validate={{email: true}} />
     </AvForm>
   );
 }
}s