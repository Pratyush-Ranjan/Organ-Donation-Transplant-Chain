import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import axios from "axios";


class FormsPage extends React.Component {
  state = {
    name: "Mark",
    address: "",
    city: "",
    email: "",
    contact: "",
    bloodgroup: "",
    organ: "",
    flag: false
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
    const { name, address, city, email, contact, bloodgroup, organ } = this.state;
    axios.post('/api/adddonor', { name, address, city, email, contact, bloodgroup, organ })
      .then(function (response) {
        console.log(response);
        // this.setState({flag:true});
        window.location = "/donor/list/" + city;

      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(this.state);
    //this.state.flag? this.context.history.push('/donor/list'):null;
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
                value={this.state.name}
                name="name"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx"
                label="Full name"
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
              {/* <MDBInput
                value={this.state.city}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="city"
                label="City"
                required
              >
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
   */}
              <label className="mt-3 text-muted">
                Pick your city:
   <select value={this.state.city} name="city" onChange={this.changeHandler} class="browser-default custom-select mt-1">
   <option>Choose your option</option>
                  <option value="New Delhi">New Delhi</option>
                  <option value="Pune">Pune</option>
                  <option value="Gwalior">Gwalior</option>

                </select>
              </label>

            </MDBCol>

            <MDBCol md="4">
              <MDBInput
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="materialFormRegisterConfirmEx3"
                name="email"
                label="Your Email address"
                required
              >
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </MDBInput>
            </MDBCol>

          </MDBRow>

          <MDBRow center>
            <MDBCol md="4">
              {/* <MDBInput
                value={this.state.bloodgroup}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterConfirmEx3"
                name="bloodgroup"
                label="Your Blood Group"
                required
              >

              </MDBInput> */}

              <label className="mt-3 text-muted">
                Pick your Blood Group:
   <select value={this.state.bloodgroup} name="bloodgroup" onChange={this.changeHandler} class="browser-default custom-select mt-1">
   <option>Choose your option</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>

                </select>
              </label>


            </MDBCol>

            <MDBCol md="4">
              {/* <MDBInput
                value={this.state.organ}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="organ"
                label="Organ"
                required
              >
              </MDBInput> */}

              <label className="mt-3 text-muted">
                What would you like to donate?
   <select value={this.state.organ} name="organ" onChange={this.changeHandler} class="browser-default custom-select mt-1">
   <option>Choose your option</option>
                  <option value="Blood">Blood</option>
                  <option value="Eyes">Eyes</option>
                  <option value="Heart">Heart</option>
                  <option value="Lungs">Lungs</option>
                  <option value="Kidney">Kidney</option>


                </select>
              </label>

            </MDBCol>
          </MDBRow>

          <MDBRow center>
            <MDBBtn color="success" type="submit" >
              Submit Form
          </MDBBtn>
          </MDBRow>

        </form>
      </div>
    );
  }
}

export default FormsPage;