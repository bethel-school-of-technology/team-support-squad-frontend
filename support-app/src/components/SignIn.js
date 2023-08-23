import React, { useState } from 'react';
import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBLink, CDBContainer } from 'cdbreact';
import '../stylesheet/Signin.css';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = () => {
    // Add your sign-in logic here
  };

  return (
    <CDBContainer className="d-flex align-items-center justify-content-center min-vh-100">
      <CDBCard style={{ width: '30rem' }} className="form-container">
        <CDBCardBody className="mx-4">
          <div className="text-center mt-4 mb-2">
            <p className="h4 font-weight-bold"> Sign in </p>
          </div>
          <CDBInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <CDBInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <p className="mt-n3 text-end ">
            <CDBLink className="p-0" to="#">
              Forgot Password ?
            </CDBLink>
          </p>
          <CDBBtn color="dark" className="btn-block my-4 mx-0" onClick={handleSignin}>
            Sign in
          </CDBBtn>
          <p className="text-center"> or sign in with</p>
          <div className="flex-row my-3 d-flex justify-content-center">
            <CDBBtn color="white" className="m-0">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn color="white" className="m-0">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn color="white" className="m-0">
              <CDBIcon fab icon="github" />
            </CDBBtn>
          </div>
          <hr />
          <p className="text-center">
            Not a member?{' '}
            {/* <CDBLink className="d-inline p-0" to="#"> */}
            <Link to="/sign-up">Sign Up</Link>
            {/* </CDBLink> */}
          </p>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
};

export default Signin;




