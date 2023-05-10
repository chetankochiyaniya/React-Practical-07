import React, {useRef} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './index.css';  
import { addUser } from '../../redux/actions'
import signupsvg from '../SignUp/signupsvg.png';
import { validation } from '../Validation';

const initialValues = {
  name: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
  file: null,
  fileURL: ''
}

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fileRef = useRef(null);
  const onSubmit = values => {
    const { name, email, phoneNumber, password, fileURL } = values;
    dispatch(
      addUser({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        fileURL: fileURL
      })
    );
    navigate('/home');
  }
  return (
    <div className='sign-up-page'>
      <div className='sign-up'>
        <div className='sign-up-title'>Sign Up</div>
        <div className='asset asset-mobile'>
          <img src={signupsvg} alt='sign-up-img' />
        </div>
        <div className='sign-up-form'>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validation}>
            {({values, setFieldValue}) => (
              <Form> 
                {
                  values.file && 
                  <div className='photo-preview'>
                    <img className='preview-img' src={values.fileURL} alt='preview-img' />
                  </div>
                }  
                <input 
                  ref={fileRef} hidden className='photo' 
                  id="file" name="file" type="file" 
                  onChange={(e) => {
                    setFieldValue("file", e.currentTarget.files[0]); 
                    setFieldValue('fileURL', URL.createObjectURL(e.currentTarget.files[0]))
                  }} 
                />
                <div onClick={() => fileRef.current.click()} className='photo-input'>Photo +</div>
                <div className='error-msg img-error-msg'>
                  <ErrorMessage name='file' />
                </div>
                {/* Name field */}
                <label htmlFor='name'>Name </label><br />
                <Field className='input' type={'text'} id='name' name='name' />
                <div className='error-msg'>
                  <ErrorMessage name='name' />
                </div>
                {/* Email field */}
                <label htmlFor='email'>Email </label><br />
                <Field type={'email'} id='email' name='email' />
                <div className='error-msg'><ErrorMessage name='email' /></div>
                {/* Phone Number field */}
                <label htmlFor='phoneNumber'>Phone number </label><br />
                <Field className='input' type={'number'} id='phoneNumber' name='phoneNumber' />
                <div className='error-msg'>
                  <ErrorMessage name='phoneNumber' />
                </div>
                {/* Password field */}
                <label htmlFor='password'>password </label><br />
                <Field type={'password'} id='password' name='password' />
                <div className='error-msg'>
                  <ErrorMessage name='password' />
                </div>
                {/* Confirm Password field */}
                <label htmlFor='confirmPassword'>Confirm Password </label><br />
                <Field type={'password'} id='confirmPassword' name='confirmPassword' />
                <div className='error-msg'>
                  <ErrorMessage name='confirmPassword' />
                </div>
                {/* Submit & Reset */}
                <div className='btn-group'>
                  <button type={'submit'} className='submit-btn'>Submit</button>
                  <button type={'reset'} className='reset-btn'>Reset</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className='asset asset-pc'>
        <img src={signupsvg} alt='sign-up-img' />
      </div>
    </div>
  );
};

export default SignUp;