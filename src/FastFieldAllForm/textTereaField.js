import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label,Button, FormFeedback,TextArea } from 'reactstrap';
import { ErrorMessage,Field } from 'formik';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';
textTereaField.propTypes = {
    
};
function textTereaField(props) {
   
    const {field,form,placeholder,label,disabled,type,user,navigate}=props
   
  
    //form nay de lay loi trong form ra nhu erros touch
    const {name,onChange}=field
   
    //touch la khi minh  focus vao no va tha ra lam no active
    const {errors,touched}=form
    
    //khi ma co loi roi
    const showErros=errors[name]&&touched[name]
    const handleChangeComment=(e)=>{
        
        if(!user){
            notification['error']({
                message: 'Thông báo',
                description: 'Bạn cần đăng nhập để được bình luận',
            })
            navigate('/sign')
        }
    }

    return (
        <div>
            
        <FormGroup className='form-group mt-3'>
         <Input 
           type='textarea'
           rows={8}
        
           {...field}
           // onChange={handleChangeComment}
             onKeyUp={!user?handleChangeComment:null}
            invalid={showErros}
            className={`form-control resetValueTextField ${touched[name]&&!errors[name]?'is-valid':''}`}
            />
            
            {showErros&&<ErrorMessage name={name} component={FormFeedback}/>}
         
        </FormGroup>
      
    </div>
    );
}

export default textTereaField;