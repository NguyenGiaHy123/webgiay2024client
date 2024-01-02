import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label,Button, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';
SearchForm.propTypes = {
    type:PropTypes.string,
    label:PropTypes.string,
    placeholder:PropTypes.string,
    disabled:PropTypes.bool,

};

SearchForm.defaultProps={
    type:"",
    label:"",
    placeholder:"",
    disabled:false
   

}
function SearchForm(props) {
    const {field,form,placeholder,label,disabled,type}=props
    //form nay de lay loi trong form ra nhu erros touch
    const {name}=field
    
    //touch la khi minh  focus vao no va tha ra lam no active
    const {errors,touched}=form

    
    //khi ma co loi roi
    const showErros=errors[name]&&touched[name]
  
    //trong file nay  bat buoc phai co la onChange,name ,value,onBlur
    return (
      
            
            <FormGroup className='form-group' >
          
                <Input type="text"
               
                id={name}
                {...field}
               
                 disabled={disabled}
                 placeholder={placeholder}
                />
            
                  <Button className='icon' type='submit'>
                     <i type="submit" class="uil uil-search-alt"></i>
                    </Button>
             
               </FormGroup>

    );
}

export default SearchForm;