import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

export default () => (
    <div>


          <BrowserRouter>

    <MDBNav className="nav-tabs " >
      
{['Profile', 'Approve-Donor', 'Register-Recipient','Transplant-Match', 'Patient-Record'].map((text, index) => (
  <MDBNavItem>
           <MDBNavLink to ={`/hospital/${text}`}>
             {text}
           </MDBNavLink>
  </MDBNavItem>         
         ))}
    </MDBNav>

  </BrowserRouter>
  </div>
);