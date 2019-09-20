import React from "react";
import HosDrawer from "./HospitalNav";
//import Web3 from 'web3';
import OC from './oc';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from "mdbreact";
//import hospital from "./images/hospital.png";
class Hrecord extends React.Component {

    state = {
        donorkey: '',
        account: null,
        EMRHash: ''
    }
    componentDidMount = async () => {
        console.log("Hello from record download")
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }
    onSubmit = async () => {
        event.preventDefault();
        console.log("record ke submit ke andar");
        OC.methods.EMR(this.state.donorkey).call().then((emrhash) => {
            this.setState({ EMRHash: emrhash });
            console.log(this.state.EMRHash);
           
        });
        console.log("https://ipfs.io/ipfs/${this.state.EMRHash}`")
        

    }

    render() {
        return (

            <MDBContainer className="">
                <HosDrawer />
                <form>
                    <MDBRow className="mt-5" >

                        <MDBCol>

                            <p className="h5 text-center mb-4 mt-12 h1 display-4">Enter Details to get EMR</p>
                            <div className="grey-text">
                                <MDBInput
                                    label="Donor Public Key"
                                    icon="user"
                                    name="donorkey"
                                    group
                                    type="text"
                                    onChange={this.onChange.bind(this)}

                                />


                            </div>
                            <div className="text-center">
                                {this.state.EMRHash ? <MDBBtn gradient="blue" href= {`https://ipfs.io/ipfs/${this.state.EMRHash}`}
                                                       target="_blank">Click to download Record!</MDBBtn> : null}
                            </div>
                        <div className="text-center">
                            <MDBBtn outline color="dark" onClick={this.onSubmit.bind(this)}>
                                Submit <MDBIcon far icon="paper-plane" className="ml-1" />
                            </MDBBtn>
                        </div>

                        </MDBCol>
                    </MDBRow>

                </form>
            </MDBContainer >


        )
    }
}



export default Hrecord;