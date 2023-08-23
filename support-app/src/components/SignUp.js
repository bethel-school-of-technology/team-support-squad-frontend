import React, { useState } from 'react';
import {
  CDBInput,
  CDBCard,
  CDBCardBody,
  CDBIcon,
  CDBBtn,
  CDBLink,
  CDBContainer,
} from 'cdbreact';
// import signupImage from '../assets/signup-image.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
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
      <CDBCard style={{ width: '30rem' }}>
        <div className="text-center text-white" style={{ background: 'black' }}>
          <p className="h5 mt-2 py-4 font-weight-bold"> Sign up </p>
        </div>
        <CDBCardBody className="mx-4">
          <CDBInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <p className="text-muted text-center small mt-n4">At least 8 characters and 1 digit</p>
          <CDBInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <CDBInput label="ConfirmPassword" type="confirmpassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <CDBInput label="Full Name" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <CDBInput label="Phone Number" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <CDBBtn color="dark" outline className="btn-block my-3 mx-0">
            Sign up
          </CDBBtn>
          <p className="text-center"> or sign up with</p>
          <div className="flex-row mb-3 d-flex justify-content-center">
            <CDBBtn color="black" className="m-0" outline>
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn color="black" className="m-0" outline>
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn color="black" className="m-0" outline>
              <CDBIcon fab icon="linkedin-in" />
            </CDBBtn>
            <CDBBtn color="black" className="m-0" outline>
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
    </CDBContainer>
  );
};

export default Signup;



