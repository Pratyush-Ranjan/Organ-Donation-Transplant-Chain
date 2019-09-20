import React from "react";
import HosDrawer from "./HospitalNav";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import axios from 'axios';
import ipfs from './ipfs';
//import Web3 from 'web3';
import getWeb3 from "./getWeb3";
import OC from './oc';
//import hospital from "./images/hospital.png";
class Hrecord extends React.Component {

    state = {
        name: '',
        email: '',
        donorkey: '',
        ipfsHash: '',
        account: null,
        EMRHash: '',
        buffer: null,
        address: "",
        city: "",
        contact: "",
        bloodgroup: "",
        organ: ""
    }
    componentDidMount = async () => {
        console.log("Approve ke component ke andar");
        const acc = await window.localStorage.getItem("web3account");
        this.setState({ account: acc });
        console.log(this.state.account);
    }
    onfileChange(e) {
        event.preventDefault()
        const file = e.target.files[0]
        const reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => {
            this.setState({ buffer: Buffer(reader.result) })
            console.log('buffer', this.state.buffer)
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }
    onSubmit = async () => {
        event.preventDefault();
        console.log("approve ke submit ke andar");
        axios.get(`/api/getdonor/${this.state.name}/${this.state.email}`)
            .then(async (res) => {
                console.log(res);
                this.setState({
                    address: res.data.address,
                    city: res.data.city,
                    contact: res.data.contact,
                    bloodgroup: res.data.bloodgroup,
                    organ: res.data.organ
                });
                console.log(this.state);
                const data = JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    city: this.state.city,
                    address: this.state.address,
                    contact: this.state.contact
                });
                console.log(data);
                var buf = Buffer.from(JSON.stringify(data));
                console.log("buffer:", buf);
                ipfs.files.add(buf, (error, result) => {
                    if (error) {
                        console.error(error)
                        return
                    }
                    this.setState({ ipfsHash: result[0].hash });
                    console.log('ipfsHash', this.state.ipfsHash);
                });
                ipfs.files.add(this.state.buffer, (error, result) => {
                    if (error) {
                        console.error(error)
                        return
                    }
                    this.setState({ EMRHash: result[0].hash })
                    console.log('EMRHash', this.state.EMRHash);
                });

                setTimeout(() => {
                    OC.methods.adddonor(this.state.donorkey, this.state.ipfsHash, this.state.EMRHash, this.state.organ, this.state.bloodgroup).send({
                        from: this.state.account,
                        gas: 1000000
                    })
                        .then((result) => {
                            if (result.status == false) {
                                console.log("could not add donor. re-try again");
                            }
                            else if (result.status == true) {
                                console.log("donor gaya in blockchain");
                                window.alert("The donor has been approved successfully!")
                            }
                        });
                axios.get(`/api/deletedonor/${this.state.name}/${this.state.email}`)
                .then(async (res) => {
                
                console.log(res);
                });

                }, 15000);

            });
    }


    render() {
        return (

            <MDBContainer className="">
                <HosDrawer />
                <form>
                    <MDBRow className="mt-5"  >

                        <MDBCol>

                            <p className="h5 text-center mb-4 mt-12 h1 display-3">Enter Details</p>
                            <div className="grey-text">
                                <MDBInput
                                    label="name"
                                    name="name"
                                    icon="user"
                                    group
                                    type="text"
                                    onChange={this.onChange.bind(this)}

                                />
                                <MDBInput
                                    label="email"
                                    icon="user"
                                    name="email"
                                    group
                                    type="text"
                                    onChange={this.onChange.bind(this)}


                                />
                                <MDBInput
                                    label="donorkey"
                                    icon="user"
                                    name="donorkey"
                                    group
                                    type="text"
                                    onChange={this.onChange.bind(this)}


                                />
                                <input type='file' onChange={this.onfileChange.bind(this)} />

                                {/* <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupFileAddon01">
                                            Upload
                                </span>
                                    </div>
                                    <div className="custom-file">
                                        <input
                                            type="file"
                                            name="file"
                                            className="custom-file-input"
                                            id="file"
                                            aria-describedby="inputGroupFileAddon01"
                                            onChange={this.onChange.bind(this)}

                                        />
                                        <label className="custom-file-label" htmlFor="file">
                                            Choose file
                                </label>
                                    </div>
                                </div> */}
                            </div>
                            <div className="text-center" onClick={this.onSubmit.bind(this)}>
                                <MDBBtn outline color="dark">
                                    Submit <MDBIcon far icon="paper-plane" className="ml-1" />
                                </MDBBtn>
                            </div>

                        </MDBCol>
                    </MDBRow>

                </form>
            </MDBContainer>


        )
    }
}



export default Hrecord;