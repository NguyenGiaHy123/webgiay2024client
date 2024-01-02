import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label,Button, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';
import {useState} from 'react';
InputQuantity.propTypes = {
    type:PropTypes.string,
    label:PropTypes.string,
    placeholder:PropTypes.string,
    disabled:PropTypes.bool,

};

InputQuantity.defaultProps={
    type:"",
    label:"",
    placeholder:"",
    disabled:false
   

}

function InputQuantity(props) {
    const [quantitys,setquantity]=useState(9);
   
    const {field,form,placeholder,label,disabled,type,value,handleQuanTiTy}=props;
 
    //form nay de lay loi trong form ra nhu erros touch
    const {name,onChange}=field
    //touch la khi minh  focus vao no va tha ra lam no active
    const {errors,touched}=form
    //khi ma co loi roi
    const showErros=errors[name]&&touched[name]
    //trong file nay  bat buoc phai co la onChange,name ,value,onBlur
    return (
        <div>
            
            <FormGroup className='form-group form-group-minus-plus'>
               
            <span className='minus' disabled={quantitys===1} onClick={()=>setquantity(quantitys-1)}>-</span>
              
                <Input type="text"
                 id={name}
                 {...field}
                 disabled={disabled}
                 placeholder={placeholder}
                 value={quantitys}
               
                /> 
                   <span className='plus' onClick={()=>setquantity(quantitys+1)}>+</span>
            </FormGroup>
          
        </div>
    );
}

export default InputQuantity;