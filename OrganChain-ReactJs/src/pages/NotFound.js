import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBFormInline } from "mdbreact";


const ErrorPage = () => {
    return (
  <MDBView>
    <MDBMask className="d-flex justify-content-center align-items-center gradient">
      <MDBContainer>
        <MDBRow>
          <div className="white-text text-center text-md-center col-md-12 mt-xl-5 mb-5">
            <h1 className="h1-responsive font-weight-bold mt-sm-5">
             404 Not Found
            </h1>
            <hr className="hr-light" />
            <h6 className="mb-4">Come later, may be?
            </h6>
            
          </div>
        </MDBRow>
      </MDBContainer>
    </MDBMask>
  </MDBView>
    );
}
  
  export default ErrorPage;