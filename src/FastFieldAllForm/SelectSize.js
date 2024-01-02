import React from 'react';
import PropTypes from 'prop-types';
import {FormFeedback, FormGroup,Label} from 'reactstrap'
import Select from 'react-select';

import { ErrorMessage } from 'formik';
SelectField.propTypes = {
    type:PropTypes.string,
    disabled:PropTypes.bool,
    placeholder:PropTypes.string,
    label:PropTypes.string,
    option:PropTypes.array,
};
SelectField.defaultProps={
    type:"",
    label:"",
    placeholder:"",
    disabled:false,
    option:[]
}
function SelectField(props) {
    const{label,placeholder,disabled,type,field,form,option}=props
    const{name,value,onChange,onBlur}=field
  
    const {errors,touched}=form

    //khi ma co loi roi
    const showErros=errors[name]&&touched[name]
 
    const valueSelect=option.find((otion)=>
     otion.value===value
    )
   
    const handleOnChangeInput=(selectOptionValue)=>{
        //ham nay se lay value cho the select
        const valueSelectTion=selectOptionValue?selectOptionValue.value:selectOptionValue
        const changeEvent={
            target:{
                name:name,
                value:valueSelectTion
            }
        }
      field.onChange(changeEvent)
   
      
    }
    return (
    <FormGroup className='form-group-select'>
        
       {label && <Label for="size" className='size sluong'>{label} : </Label>}
      
     
           <Select
           id={name}
           options={option} placeholder={placeholder}
           {...field}
           disabled={disabled}
           onChange={handleOnChangeInput}
           value={valueSelect}
           
           
           className={showErros?'is-invalid':''}
     />

     
      
       <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
    
    );
}

export default SelectField;