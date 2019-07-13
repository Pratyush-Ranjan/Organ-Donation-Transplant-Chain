import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import './css/HomePage.css';

const FormPage = () => {
  return (
    <div className="mt-12 views">
    <br></br><br></br><br></br>
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6" className="mx-auto">
          <MDBCard>
          <div className="header pt-3 peach-gradient">
              <MDBRow className="d-flex justify-content-center">
                <h3 className="white-text mb-3 pt-3 font-weight-bold">
                   Hospital Log in
                </h3>
              </MDBRow>
             </div> 
            <MDBCardBody className="mx-4">
              
              <MDBInput
                label="Your email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
             
              <div className="text-center mb-3">
                <MDBBtn className="text-center btn" color="success" href="/hospital/nav">
                  Sign in
                </MDBBtn>
              </div>
              
            </MDBCardBody>
           </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
};

export default FormPage;