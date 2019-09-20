import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBContainer, MDBJumbotron, MDBAlert, MDBRow, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import img from './hospital.png';
import axios from 'axios';

var hlist = [
];
var obj;
var imgi;


class JumbotronPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      i:''
     
    }

  }
  componentWillMount(){
   //  this.setState({i:this.props.list.imgurl});
    // console.log(this.state.i);
     //imgi = require(`${this.state.i}`);
     setTimeout(() => {
      
      this.setState({i:this.props.list.imgurl});
      imgi = require(`${this.state.i}`);
    }, 2000);
  }
  componentWillReceiveProps(nextProps) {
   // console.log('componentWillReceiveProps', nextProps);
   // this.setState(nextProps);
}

  render() {
   
 
    return (
      <MDBContainer className="mt-5 text-center mx-auto ">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron className="juicy-peach-gradient">
            <MDBCardImage
                //  src="https://www.javatpoint.com/fullformpages/images/aiims.png"
                src={imgi}
                className="img-fluid mx-auto"
              />
             <br/>
              <div className="">
              <h2 className="h1 display-3 "> {this.state.list.name}</h2>
              <hr className="my-2" />
              <p className="lead">
                {this.state.list.address}
              
                <h5 className="font-weight-bold">Contact:</h5> {this.state.list.contact} <br />
              </p>
             
              <br/>
              </div>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}

const CardExample = (props) => {
  return (

    <MDBCol size="4" className="">
      <MDBCard style={{ width: "26rem" }} className="mx-auto mb-5">
        <MDBCardImage className="img-fluid" src={img} waves />
        <MDBCardBody>
          <MDBCardTitle>{props.list.name}</MDBCardTitle>
          <MDBCardText>
            {props.list.address}
          </MDBCardText>
          {/* <MDBBtn href="#" className="text-center btn btn-primary">Select</MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
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

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}


export default class HospitalList extends Component {
  state = {
    city: '',
    flag:false
  }
  componentWillMount() {
    console.log(this.props.match.params.city);
    var c = this.props.match.params.city;
    this.setState({ city: c });
    console.log(this.state);


    c = toTitleCase(c);
    console.log(c);
    axios.get(`/api/hospital/${c}`)
      .then((res) => {
        console.log("list ke then ke andar");
        console.log(res.data);
        for(let i = 0;i<res.data.length;i++){
          const vary={
            address: res.data[i].address,
            city: res.data[i].city,
            name: res.data[i].username,
            contact: res.data[i].contact,
            imgurl: res.data[i].imgurl
          }
            hlist.push(vary);
        }   
      })
      .catch((err) => window.alert(err));
      setTimeout(() => {
        console.log("hlist:"+hlist);
        this.setState({ flag: true });
      }, 2000);
  }

  render() {
    return (

      <div>

        <br></br>
        <h3 className="text-center mt-5 mb-5" ><MDBAlert color="info" style={{ width: '50%' }}>Please visit any one hospital from the given list, to get yourself approved.</MDBAlert></h3>
         {this.state.flag ?
      <Rlist buy={hlist} />
      : console.log("null null")}
        <br />
        
        <MDBRow className="ml-2">
          {obj}
        </MDBRow>

      </div>
    );

  }
}



// const HospitalList = () => {

//     const obj = hlist.map((listItem) => 
//     <CardExample list= {listItem}/>
//     );
//     console.log(obj);
//     return (

//         <div>
//         <br/>
//         <h3 className="text-center mt-5 mb-5" ><MDBAlert color="info" style={{width: '50%'}}>Please choose one hospital from the given list.</MDBAlert></h3>
//         <MDBRow className="ml-2">
//           {obj}
//         </MDBRow>

//         </div>
//     );

// }

// export default HospitalList;