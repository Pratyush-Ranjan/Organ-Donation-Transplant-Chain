import React from "react";
import HosDrawer from "./HospitalNav";
import {MDBContainer} from "mdbreact";

const SpinnerPage = () => {
    return (
      <MDBContainer>
        <HosDrawer/>
        
        <div >
          <span>Loading...</span>
        </div>
       </MDBContainer>
    );
  }
  
  export default SpinnerPage;