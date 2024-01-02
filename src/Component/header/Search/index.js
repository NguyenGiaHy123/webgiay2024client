import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { FastField, Form, Formik } from 'formik';
import { Input } from 'reactstrap';
import SearchForm from '../../../FastFieldAllForm/SearForm';
import './index.css'
import { Button } from 'reactstrap';
import {SearchApi} from '../../../featuresReducer/SearchProduct/pathApi'
import {useNavigate} from 'react-router-dom'
Search.propTypes = {
    
};

function Search(props) {
    const {setOpenMenu}=props
    const navigate=useNavigate()
    const [searToggle,setSearchToggle]=useState(false)
    const initalValues={
        keySearch:''
    }
    function getValueKeySearch(value){
        navigate(`/search/${value.keySearch}`)   
    }

    function updateSearchandBody(){
        setOpenMenu(false);
        setSearchToggle(false)
    }
    return (
       <>
       <div className='ground-search'>
       <Formik initialValues={initalValues}
          onSubmit={getValueKeySearch}
       >{
          formikProps=>{
           
            return (
                <div class='group-search'>
                <Form className={`${searToggle?'open':''}`}>
                    
                <i class="uil uil-multiply closeSearch" onClick={()=>setSearchToggle(false)}></i>

                    <FastField
                     name="keySearch"
                     component={SearchForm}
                     type='text'
                     placeholder="Nhập sản phẩm cần tìm"
                    />

                </Form>

                  <i class="uil uil-search-alt searToggle" onClick={()=>{setSearchToggle(true)}}></i>
                
                {searToggle&&<div className='active-before' onClick={updateSearchandBody}></div>}
                </div>

            )
          }
       }
       </Formik>
       </div>
       </>
    );
}

export default Search;