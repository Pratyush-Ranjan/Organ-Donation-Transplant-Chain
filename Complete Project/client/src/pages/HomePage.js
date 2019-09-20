import React from "react";
import {MDBMask, MDBRow, MDBBtn, MDBView, MDBContainer} from "mdbreact";
import './css/HomePage.css';



const HomePage = () => {
  return (
  <MDBView className="views">
   
    <MDBMask className="d-block justify-content-center align-items-center gradient">
      <MDBContainer>
        <MDBRow>
          <div className="white-text text-center text-md-center col-md-12 mt-xl-5 mb-5">
          <h3 className="display-3  mb-0 pt-md-5" style={{fontFamily: "cursive"}}>
              <br/>
              OrganChain{" "}
            </h3>
            <hr className="hr-light" />
            <h6 className="mb-4">
              India's first Ethereum based Organ and Tissue Donation System.
            </h6>
            <MDBBtn outline color="white" href="/signup">
              
              New Donor? Sign up!
             
            </MDBBtn>
          </div>
        </MDBRow>
      </MDBContainer>
    </MDBMask>
  </MDBView>
    );
}
  
  export default HomePage;