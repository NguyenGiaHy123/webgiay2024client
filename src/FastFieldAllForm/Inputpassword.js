import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Input } from 'reactstrap';
import { ErrorMessage } from 'formik';

Inputpassword.propTypes = {
    
};

function Inputpassword(props) {
    const {form,field,type,placeholder}=props
    const {name}=field
    const {touched,errors}=form
    const errorPassword=touched[name]&&errors[name]
    return (
        <FormGroup className='form-group'>
          <div className='iconform-group'>
          <i class="uil uil-key-skeleton"></i>

                </div>
            <Input type={type}
             placeholder={placeholder}
             {...field}
             invalid={errorPassword}
             className={touched[name]&&!errors[name]?'is-valid':''}
            />
            {errorPassword&&<ErrorMessage name={name} component={FormFeedback}/>}
        </FormGroup>
    );
}

export default Inputpassword;