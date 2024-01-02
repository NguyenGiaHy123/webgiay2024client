import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup ,Input} from 'reactstrap';

InputFied.propTypes = {
    
};

function InputFied(props) {
    const {form,field,type,value,placeholder} =props
    
    return (
        <div>
            <FormGroup>
                <Input
                {...field}
                type={type}
            
                placeholder={placeholder}
                />
            </FormGroup>
            
        </div>
    );
}

export default InputFied;