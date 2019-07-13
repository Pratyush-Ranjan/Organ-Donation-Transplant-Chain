      import React from "react";
      import { BrowserRouter as Router } from "react-router-dom";
      import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBSiveNav,
      MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBFormInline } from "mdbreact";
      // import "./app.css";
      import Routes from "./Routes";

      class AppPage extends React.Component {
      state = {
        collapsed: false
      };

      handleTogglerClick = () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
      };

      render() {
      const overlay = (
        <div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} onClick={()=>this.handleTogglerClick()} />
      );
      return (
      <div id="apppage">
        <Router>
          <div>
            <MDBNavbar color="black" dark expand="md" fixed="top" scrolling isCollapsed={false}>
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className="white-text">OrganChain</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse /*isOpen={this.state.collapsed}*/ navbar>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBNavLink to="/">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/policy">Policy</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/donorlogin">Donor Login</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/hospital">Hospital Login</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/contact">Contact Us</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/signup">Donor Sign Up</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {/* {this.state.collapsed && overlay} */}
            <main style={{ marginTop: "4rem" }}>
                  <Routes />
            </main>
          </div>
        </Router>
        

        <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
              <p>
                &copy; Developed by Group 32.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      );
      }
      }

      export default AppPage;