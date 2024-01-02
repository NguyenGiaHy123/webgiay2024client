import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label,Button, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';
InPutField.propTypes = {
    type:PropTypes.string,
    label:PropTypes.string,
    placeholder:PropTypes.string,
    disabled:PropTypes.bool,

};

InPutField.defaultProps={
    type:"",
    label:"",
    placeholder:"",
    disabled:false
   

}
function InPutField(props) {
    const {field,form,placeholder,label,disabled,type}=props
    //form nay de lay loi trong form ra nhu erros touch
    const {name}=field
    //touch la khi minh  focus vao no va tha ra lam no active
    const {errors,touched}=form
    //khi ma co loi roi
    const showErros=errors[name]&&touched[name]

    //trong file nay  bat buoc phai co la onChange,name ,value,onBlur
    return (
        <div>
            
            <FormGroup className='form-group'>
                <div className='iconform-group'>
                    <i class="uil uil-envelope-alt"></i>

                </div>
  
              
                <Input type="text"
                 id={name}
                 {...field}
                 disabled={disabled}
                 placeholder={placeholder}
                 invalid={showErros}
                 className={touched[name]&&!errors[name]?'is-valid':''}
                /> 
       
    
            
               
               <ErrorMessage name={name} component={FormFeedback} />
             
            </FormGroup>
          
        </div>
    );
}

export default InPutField;