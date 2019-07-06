import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./utils/getWeb3";
import ipfs from './ipfs';

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ipfsHash: '',
      ipfsHash2: '',
      web3: null,
      buffer: null,
      account: null,
      contract:null,
      name: null,
      city: null,
      address: null
    }
    this.captureFile = this.captureFile.bind(this);
    this.captureName = this.captureName.bind(this);
    this.captureCity = this.captureCity.bind(this);
    this.captureAdd = this.captureAdd.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmit2 = this.onSubmit2.bind(this);
  }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();
      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3: web3});
      this.setState({ account: accounts[0]});
      this.setState({ contract: instance }, this.instantiateContract);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  instantiateContract() {
    console.log('address',this.state.account);
    // Get the value from the contract to prove it worked.
  }

  captureName(event) {
    event.preventDefault();
    this.setState({ name: event.target.value })
      console.log('Name', this.state.name)
    }
    captureCity(event) {
    event.preventDefault();
    this.setState({ city: event.target.value })
      console.log('City', this.state.city)
    }
    captureAdd(event) {
    event.preventDefault();
    this.setState({ address: event.target.value })
      console.log('Address', this.state.address)
    }
     captureFile(event) {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)
    }
  }
   onSubmit2(event) {
    event.preventDefault()
    ipfs.files.add(this.state.buffer, (error, result) => {
      if(error) {
        console.error(error)
        return
      }
      this.setState({ ipfsHash2: result[0].hash })
        console.log('ifpsHash', this.state.ipfsHash2);
        ipfs.files.get(this.state.ipfsHash2, function (err, files) {
        files.forEach((file) => {
          console.log(file.path)
          console.log(file.content.toString('utf8'))
        })
      })
    })
  }
  onSubmit(event) {
    event.preventDefault();
    const data = JSON.stringify({
    name: this.state.name,
    city: this.state.city,
    address: this.state.address
  });
    console.log(data);
    var buf = Buffer.from(JSON.stringify(data));
    console.log("buffer:",buf);
    ipfs.files.add(buf, (error, result) => {
      if(error) {
        console.error(error)
        return
      }
      console.log('address',this.state.account);
        this.setState({ ipfsHash: result[0].hash });
        console.log('ipfsHash', this.state.ipfsHash);
        ipfs.cat(this.state.ipfsHash, (err,res) => {
          if(err) {
        console.error(err)
        return
      }
      const temp=JSON.parse(res.toString());
      console.log(temp);
      var ten=JSON.parse(temp);
      console.log("name:",ten["name"]);
      console.log("city:",ten["city"]);
      console.log("address:",ten["address"]);
        });
    });
      }

  render() {
    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
          <a className="pure-menu-heading pure-menu-link">IPFS Form Data Upload</a>
        </nav>

        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h2>Upload Data</h2>
              <form onSubmit={this.onSubmit} >
                <input type='text' onChange={this.captureName} placeholder='enter name' />
                <input type='text' onChange={this.captureCity} placeholder='enter city'/>
                <input type='text' onChange={this.captureAdd} placeholder='enter address'/>
                <input type='submit' />
              </form>
            </div>
            <div className="pure-u-1-1">
              <h2>Upload File</h2>
              <form onSubmit={this.onSubmit2} >
                <input type='file' onChange={this.captureFile} />
                <input type='submit' />
              </form>
              <a href={`https://ipfs.io/ipfs/${this.state.ipfsHash2}`}>see the file data </a>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
