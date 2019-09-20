import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBCardText } from 'mdbreact';
import './css/HomePage.css';
import OC from './oc';
import ipfs from './ipfs';
import axios from 'axios';

class FormPage extends React.Component {

  state = {
    dflag:false,
    dkey: null,
    donorid: '',
    organ: '',
    ipfsHash: '',
    bgroup: '',
    recipientid: '',
    dname: '',
    dcity: '',
    daddress: '',
    demail: '',
    dcontact: '',
    hid: '',
    haddress:'',
    hname:'',
    hcity:'',
    hcontact:'',
    rflag:false,
    rhash: '',
    rorgan: '',
    rbgroup: '',
    rid: '',
    rname: '',
    rcity: '',
    raddress: '',
    rcontact: '',
    remail: ''
  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  onSubmit = async () => {
    event.preventDefault();
    console.log("Dkey: " + this.state.dkey);
    console.log("record ke submit ke andar");
    await OC.methods.getdonor(this.state.dkey).call().then((donor) => {
      this.setState({
        donorid: donor[0],
        ipfsHash: donor[1],
        organ: donor[2],
        bgroup: donor[3],
        recipientid: donor[4]
        
      });
      console.log(this.state);
      ipfs.cat(donor[1], (err, res) => {
        if (err) {
          console.error(err)
          return
        }
        const temp = JSON.parse(res.toString());
        console.log("temp:"+temp);
        var ten = JSON.parse(temp);
        this.setState({
          dname: ten["name"],
          daddress: ten["address"],
          dcity: ten["city"],
          demail: ten["email"],
          dcontact: ten["contact"],
          dflag:true
        });
        
        console.log("Ab true ho jana chahiye tha dflag:"+this.state);

      });
      if (donor[4] === "0x0000000000000000000000000000000000000000")
        console.log("no recipient match");
      else
        console.log("recipiet hai");
    });
    setTimeout(() => {
      if (this.state.recipientid === "0x0000000000000000000000000000000000000000") {
        console.log("no recipient match");
      }
      else {
        OC.methods.getrecipient(this.state.recipientid).call().then((recipient) => {
          this.setState({
            rid: recipient[0],
            hid: recipient[1],
            rhash: recipient[2],
            rorgan: recipient[3],
            rbgroup: recipient[4]
          });
          console.log(this.state);
          ipfs.cat(recipient[2], (err, res) => {
            if (err) {
              console.error(err)
              return
            }
            const temp = JSON.parse(res.toString());
            console.log(temp);
            var ten = JSON.parse(temp);
            this.setState({
              rname: ten["name"],
              raddress: ten["address"],
              rcity: ten["city"],
              remail: ten["email"],
              rcontact: ten["contact"],
              rflag:true
            });
            console.log(this.state);
          });
          axios.get(`/api/hospitalbykey/${this.state.hid}`)
            .then(async (res) => {
                console.log(res);
                this.setState({
                    haddress: res.data[0].address,
                    hcity: res.data[0].city,
                    hcontact: res.data[0].contact,
                    hname: res.data[0].username
                });
              });
        });
      }
    }, 3000);
  }

  render() {
    return (
      <div className="mt-12 views">
        <br></br><br></br><br></br>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6" className="mx-auto">
              {!this.state.dflag?
              <MDBCard>
                <div className="header pt-3 rainy-ashville-gradient">
                  <MDBRow className="d-flex justify-content-center">
                    <h3 className="white-text mb-3 pt-3  h3 display-3">
                      Donor Log in
                </h3>
                  </MDBRow>

                </div>
                <MDBCardBody className="mx-4">

                  <MDBInput
                    label="Enter Key"
                    group
                    type="text"
                    name="dkey"
                    onChange={this.onChange.bind(this)}

                  />

                  <div className="text-center mb-3">
                    <MDBBtn
                      className="text-center btn" color="success"
                      onClick={this.onSubmit.bind(this)}
                    >
                      Sign in
                </MDBBtn>
                  </div>

                </MDBCardBody>
              </MDBCard>
              :null  }
            </MDBCol>
            
          </MDBRow>

          <MDBRow>
            <MDBCol md="4" className="mx-auto mt-1">
              {this.state.dflag?
              <MDBCard>
                <div className="header pt-3 near-moon-gradient">
                  <MDBRow className="d-flex justify-content-center">
                    <h3 className="white-text mb-3 pt-3 font-weight-bold">
                      Donor Details
                </h3>
                  </MDBRow>

                </div>
                <MDBCardBody className="mx-4">
                <MDBCardText>
                  <h5 className="font-weight-bold">Name:</h5> {this.state.dname} <br />
                  <h5 className="font-weight-bold">Address:</h5> {this.state.daddress} <br />
                  <h5 className="font-weight-bold">Contact:</h5> {this.state.dcontact}<br />
                  <h5 className="font-weight-bold">City:</h5> {this.state.dcity}<br />
                  <h5 className="font-weight-bold">DonorID:</h5> {this.state.donorid} <br />
                  <h5 className="font-weight-bold">Organ:</h5> {this.state.organ} <br />
                  <h5 className="font-weight-bold">Blood Group:</h5> {this.state.bgroup} <br />
                  <h5 className="font-weight-bold">Email:</h5> {this.state.demail} <br />
                  
                </MDBCardText>
                  
                </MDBCardBody>
              </MDBCard>
              :null  }
            </MDBCol>
            
         

       
            <MDBCol md="4" className="mx-auto mt-1">
              {this.state.dflag?
              <MDBCard>
                <div className="header pt-3 near-moon-gradient">
                  <MDBRow className="d-flex justify-content-center">
                    <h3 className="white-text mb-3 pt-3 font-weight-bold">
                     Hospital Details
                </h3>
                  </MDBRow>
                
                </div>
                <MDBCardBody className="mx-4">
                {this.state.rflag?
                <MDBCardText>
                  <h5 className="font-weight-bold">Name:</h5> {this.state.hname} <br />
                  <h5 className="font-weight-bold">HospitalID:</h5> {this.state.hid} <br />
                  <h5 className="font-weight-bold">Address:</h5> {this.state.haddress} <br />
                  <h5 className="font-weight-bold">Contact:</h5> {this.state.hcontact}<br />
                  <h5 className="font-weight-bold">City:</h5> {this.state.hcity}<br />
                 
                  
                </MDBCardText>
                 : <MDBCardText>
                  <h5 className="font-weight-bold">Sorry, you haven't been assigned a recipient yet!</h5> <br />
                </MDBCardText>}
                
                </MDBCardBody>
              </MDBCard>
              :null  }
            </MDBCol>
              
            <MDBCol md="4" className="mx-auto mt-1">
            {this.state.dflag?
              <MDBCard>
                <div className="header pt-3 near-moon-gradient">
                  <MDBRow className="d-flex justify-content-center">
                    <h3 className="white-text mb-3 pt-3 font-weight-bold">
                      Recipient Details
                </h3>
                  </MDBRow>

                </div>
                <MDBCardBody className="mx-4">
                {this.state.rflag?
                <MDBCardText>
                  <h5 className="font-weight-bold">Name:</h5> {this.state.rname} <br />
                  <h5 className="font-weight-bold">Address:</h5> {this.state.raddress} <br />
                  <h5 className="font-weight-bold">Contact:</h5> {this.state.rcontact}<br />
                  <h5 className="font-weight-bold">City:</h5> {this.state.rcity}<br />
                  <h5 className="font-weight-bold">RecipientID:</h5> {this.state.rid} <br />
                  <h5 className="font-weight-bold">Organ:</h5> {this.state.rorgan} <br />
                  <h5 className="font-weight-bold">Blood Group:</h5> {this.state.rbgroup} <br />
                  <h5 className="font-weight-bold">Email:</h5> {this.state.remail} <br />
                  
                </MDBCardText>
                : <MDBCardText>
                  <h5 className="font-weight-bold">Sorry, you haven't been assigned a recipient yet!</h5> <br />
                </MDBCardText>}
                  
                </MDBCardBody>
              </MDBCard>
              :null  }
            </MDBCol>
            
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default FormPage;