
//import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MDBJumbotron, MDBBtn, MDBCard, MDBAlert, MDBRow, MDBCardBody, MDBContainer, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import HosDrawer from "./HospitalNav";
import React, { Component } from 'react';
import OC from './oc';
import ipfs from './ipfs';
import jwtDecode from 'jwt-decode';
import getWeb3 from "./getWeb3";

var obj;


class JumbotronPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      account: '',
      did: '',
      donorid: '',
      dname: '',
      dcontact: '',
      demail: '',
      daddress: '',
      dcity: '',
      organ: '',
      bgroup: '',

      f: false
    }

  }

  onSubmit = async () => {
    const acc = await window.localStorage.getItem("web3account");
    this.setState({ account: acc });
    console.log(this.state.account);
    event.preventDefault();
    console.log(this.state.list.name + " ke Jumbotron ke submit ke andar");
    await OC.methods.transplantmatch(this.state.list.key).send({
      from: this.state.account,
      gas: 1000000
    }).then((result) => {
      if (result.status == false) {
        console.log("No match found");
        window.alert("Sorry, no match found!");
      }
      else if (result.status == true) {
        console.log("Match found");
        OC.methods.transplantedrecipient(this.state.list.key).call().then((transdid) => {
          this.setState({ did: transdid });
          console.log(this.state.did);
        });
        setTimeout(() => {
          OC.methods.getdonor(this.state.did).call().then((donor) => {
            this.setState({
              donorid: donor[0],
              ipfsHash: donor[1],
              organ: donor[2],
              bgroup: donor[3]
            });
            console.log(this.state);
            ipfs.cat(donor[1], (err, res) => {
              if (err) {
                console.error(err)
                return
              }
              const temp = JSON.parse(res.toString());
              console.log("temp:" + temp);
              var ten = JSON.parse(temp);
              this.setState({
                dname: ten["name"],
                daddress: ten["address"],
                dcity: ten["city"],
                demail: ten["email"],
                dcontact: ten["contact"],
                f: true
              });
            });
          });
        }, 3000);
      }
    });
  }

  render() {
    return (
      <MDBContainer className="mt-5 text-center mx-5">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron>

              {
                this.state.f ? <div className="dusty-grass-gradient">
                  <h2 className="h1 display-3">Donor: {this.state.dname}</h2>
                  <p className="lead">
                    {this.state.did}
                  </p>
                  <hr className="my-2" />
                  <p className="lead">
                    <h5 className="font-weight-bold">Blood Group:</h5>  {this.state.bgroup} <br />
                    <h5 className="font-weight-bold">Organ:</h5>  {this.state.organ} <br />
                    <h5 className="font-weight-bold">Email:</h5>  {this.state.demail} <br />
                    <h5 className="font-weight-bold">Contact:</h5>  {this.state.dcontact} <br />
                    <h5 className="font-weight-bold">Address:</h5>  {this.state.daddress} <br />
                    <h5 className="font-weight-bold">City:</h5> {this.state.dcity} <br />
                  </p>

                  <hr className="my-2" /> <hr className="my-2" />
                </div>

                  : null
              }
              <div className="rare-wind-gradient">
                <h2 className="h1 display-3 ">Recipient: {this.state.list.name}</h2>
                <p className="lead">
                  {this.state.list.key}
                </p>
                <hr className="my-2" />
                <p className="lead">
                  <h5 className="font-weight-bold">Blood Group:</h5>  {this.state.list.bgroup} <br />
                  <h5 className="font-weight-bold">Organ:</h5>  {this.state.list.organ} <br />
                  <h5 className="font-weight-bold">Email:</h5>  {this.state.list.email} <br />
                  <h5 className="font-weight-bold">Contact:</h5>  {this.state.list.contact} <br />
                  <h5 className="font-weight-bold">Address:</h5>  {this.state.list.address} <br />
                  <h5 className="font-weight-bold">City:</h5> {this.state.list.city} <br />
                </p>
                {
                  this.state.f ? null :

                    <p className="lead">
                      <MDBBtn color="primary" onClick={this.onSubmit.bind(this)}>Match</MDBBtn>
                    </p>
                }
                <br />
              </div>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}


const Rlist = (props) => {
  console.log("props:" + props.buy);
  obj = props.buy.map((listItem) =>
    <JumbotronPage list={listItem} />
  );
  return (
    <div>
      {obj}
    </div>
  )
}

export default class Hmatch extends Component {

  state = {
    rcount: 0,
    account: null,
    hkey: '',
    rec: [],
    flag: false
  }

  componentDidMount = async () => {
    console.log("Hello from Transplant Match");
    const user = await jwtDecode(window.localStorage.getItem("token"));
    this.setState({ hkey: user.user.hospitalpublickey })
    console.log(this.state.hkey);
    const acc = await window.localStorage.getItem("web3account");
    this.setState({ account: acc });
    console.log(this.state.account);
    await OC.methods.getrecipientcount(this.state.hkey).call().then((count) => {
      this.setState({ rcount: count });
      console.log(this.state.rcount);
    });

    var arr = [];
    for (let i = 0; i < this.state.rcount; i++) {
      OC.methods.getrecipientdetail(this.state.hkey, i).call().then((recipient) => {
        console.log(recipient);
        ipfs.cat(recipient[1], (err, res) => {
          if (err) {
            console.error(err)
            return
          }
          const temp = JSON.parse(res.toString());
          console.log("temp:" + temp);
          var ten = JSON.parse(temp);
          const data = JSON.stringify({
            name: ten["name"],
            city: ten["city"],
            address: ten["address"],
            contact: ten["contact"],
            email: ten["email"],
            key: recipient[0],
            organ: recipient[2],
            bgroup: recipient[3]
          });
          var te = JSON.parse(data);
          console.log(te);
          arr.push(te);
          //this.setState({ rec: arr });
        });
      });
    }
    setTimeout(() => {
      console.log(arr);
      this.setState({ rec: arr });
      console.log("rec:" + this.state.rec);
    }, 1000);
    setTimeout(() => {
      this.setState({ flag: true });
    }, 3000);

  }


  render() {
    return (
      <div>
        <HosDrawer />
        {this.state.rec[0] ? <MDBContainer className="">
          {console.log("render ke andar: " + this.state.rec)}
          <HosDrawer />

          {console.log("chal gaya")}
          {this.state.flag ?
            <Rlist buy={this.state.rec} />
            : console.log("null null")}

        </MDBContainer> : <div>

            <div class="d-flex justify-content-center mt-5">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            {console.log("Loading")}
          </div>

        }
      </div>
    )
  }
}





