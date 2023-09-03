import React, { useState } from 'react';
import "../stylesheet/Signup.css";
import signupImg from "../assets/Img1.jpg";
import {
  CDBInput,
  CDBCard,
  CDBCardBody,
  CDBIcon,
  CDBBtn,
  CDBLink,
  CDBContainer,
} from 'cdbreact';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; 

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // const handleSubmit = (e) => {
    // e.preventDefault();
    // *Add your form submission logic here*
  // };

  return (
    <CDBContainer className="d-flex align-items-center justify-content-center min-vh-100">
    <div className="d-flex flex-wrap justify-content-center"/>
    <div className="w-50 p-4">
      <img
        src= { signupImg }
        alt="Signup"
        className="img-fluid"
        style={{ maxHeight: '100%', maxWidth: '100%',   height: 'auto' }}
      />
    </div>
    <div className="w-50">
      <CDBCard style={{ width: '80%', margin: '0 auto',  border: 'none', boxShadow: 'none', marginBottom: '20px' }}>
        <div className="text-center text-white" style={{ background: 'pink', marginBottom: '20px' }}>
          <p className="h5 mt-2 py-3 font-weight-bold"> Sign up </p>
        </div>
        <CDBCardBody className="mx-4">
          <CDBInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <p className="text-muted text-center small mt-n4">At least 8 characters and 1 digit</p>
          <CDBInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <CDBInput label="ConfirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <CDBInput label="Full Name" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <CDBInput label="Phone Number" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <CDBBtn color="dark" outline className="btn-block my-3 mx-0" style={{ background: 'pink', color: 'white', border: 'none', fontWeight: 'bolder'}}>
            Sign up
          </CDBBtn>
          <p className="text-center"> or sign up with</p>
          <div className="flex-row mb-3 d-flex justify-content-center">
            <CDBBtn style={{ backgroundColor: 'DodgerBlue', color: 'white' }} className="m-0" outline>
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn style={{ backgroundColor: 'DeepSkyBlue', color: 'white', border: 'none' }} className="m-0" outline>
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn style={{ backgroundColor: 'DodgerBlue', color: 'white' }} className="m-0" outline>
              <CDBIcon fab icon="linkedin-in" />
            </CDBBtn>
            <CDBBtn style={{ color:'black', border: 'none' }} className="m-0" outline>
              <CDBIcon fab icon="github" />
            </CDBBtn>
          </div>
          <p className="text-center m-0">
            Already have an account?{' '}
            <CDBLink className="d-inline p-0" to="#">
            <Link to="/sign-in">Sign In</Link>
            </CDBLink>
          </p>
          <hr />
        </CDBCardBody>
      </CDBCard>
      </div>
    </CDBContainer>
  );
};

export default Signup;




