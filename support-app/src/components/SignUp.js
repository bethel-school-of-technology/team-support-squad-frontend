import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
// import "../stylesheet/Signup.css";
import {
  CDBInput,
  CDBCard,
  CDBCardBody,
  CDBIcon,
  CDBBtn,
  CDBLink,
  CDBContainer,
} from "cdbreact";
// import signupImage from '../assets/signup-image.jpg';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const { registerUser } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { email, password, fullName, phoneNumber };
      const registeredUser = await registerUser(userData);
      console.log("User registered successfully:", registeredUser);

      // Redirect to the sign-in page after successful registration
      navigate("/sign-in");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <CDBContainer className="d-flex align-items-center justify-content-center min-vh-100">
      <CDBCard style={{ width: "30rem" }}>
        <div className="text-center text-white" style={{ background: "black" }}>
          <p className="h5 mt-2 py-4 font-weight-bold"> Sign up </p>
        </div>
        <CDBCardBody className="mx-4">
          <CDBInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-muted text-center small mt-n4">
            At least 8 characters and 1 digit
          </p>
          <CDBInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <CDBInput
            label="Full Name"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <CDBInput
            label="Phone Number"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br />
          <div className="signBtn">
            <CDBBtn
              color="dark"
              outline
              className="signUpBtn"
              onClick={handleSubmit}
            >
              {" "}
              Sign up{" "}
            </CDBBtn>
          </div>

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
            Already have an account?{" "}
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
