import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBJumbotron} from "mdbreact";


class FormsPage extends React.Component {
  state = {
    fname: "Mark",
    mname: "",
    lname: "Otto",
    address: "",
    zip: "",
    email: "",
    contact: "",
    bgroup: "",
    organ: ""
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
    
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div >
        <MDBRow>
        <MDBCol>
          {/* <MDBJumbotron> */}
            <h4 className="h3 display-3 text-center mt-5 mb-5" >New Donor? Sign up here!</h4>
           
          {/* </MDBJumbotron> */}
        </MDBCol>
      </MDBRow>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow center>
          <MDBCol md="4">
              <MDBInput
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx"
                label="First name"
                required
              >
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
          <MDBCol md="4">
          <MDBInput
                value={this.state.lname}
                name="lname"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterEmailEx2"
                label="Last name"
                required
              >
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow center>
            <MDBCol md="4">
            <MDBInput
                value={this.state.contact}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="contact"
                label="Contact"
                required
              >
            <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
           
            <MDBCol md="4">
              <MDBInput
                value={this.state.address}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="address"
                label="Address"
                required
              >
            <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow center>  
            <MDBCol md="4">
              <MDBInput
                value={this.state.zip}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="zip"
                label="Zip"
                required
              >
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>

            <MDBCol md="4">
              <MDBInput
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="materialFormRegisterConfirmEx3"
                name="email"
                label="Your Email address"
              >
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </MDBInput>
            </MDBCol>

          </MDBRow>

          <MDBRow center>
            <MDBCol md="4">
            <MDBInput
                value={this.state.bgroup}
                onChange={this.changeHandler}
                type="email"
                id="materialFormRegisterConfirmEx3"
                name="bgroup"
                label="Your Blood Group"
              >
               
              </MDBInput>
            </MDBCol>
            
            <MDBCol md="4">
              <MDBInput
                value={this.state.organ}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="organ"
                label="Organ"
                required
              >
              </MDBInput>
            </MDBCol>
          </MDBRow>
         
          <MDBRow center>
          <MDBBtn color="success" type="submit">
            Submit Form
          </MDBBtn>
          </MDBRow>
          
        </form>
      </div>
    );
  }
}

export default FormsPage;