import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import './css/HomePage.css';

const FormPage = () => {
  return (
    <div className="mt-12 views">
    <br></br><br></br><br></br>
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6" className="mx-auto">
          <MDBCard>
          <div className="header pt-3 blue-gradient">
              <MDBRow className="d-flex justify-content-center">
                <h3 className="white-text mb-3 pt-3 font-weight-bold">
                   Donor Log in
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
                <MDBBtn
                  className="text-center btn" color="success"
                  href="/donor/list"
                >
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