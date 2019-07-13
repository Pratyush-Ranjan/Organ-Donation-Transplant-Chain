import React from 'react';
import { MDBBtn, MDBCard,MDBAlert, MDBRow, MDBJumbotron, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import img from './hospital.png';

const hlist = [
  {
      title: "first",
      body: "First body"
  },
  {
      title:"second",
      body:"Second body"
  },
  {
      title: "first",
      body: "First body"
  },
  {
      title:"second",
      body:"Second body"
  }
  
];


const CardExample = (props) => {
  return (
 
  <MDBCol size ="4" className="">
      <MDBCard style={{ width: "26rem" }} className="mx-auto mb-5">
        <MDBCardImage className="img-fluid" src= {img} waves />
        <MDBCardBody>
          <MDBCardTitle>{props.list.title}</MDBCardTitle>
          <MDBCardText>
           {props.list.body}
          </MDBCardText>
          <MDBBtn href="#" className="text-center btn btn-primary">Select</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}



const HospitalList = () => {
    
    const obj = hlist.map((listItem) => 
    <CardExample list= {listItem}/>
    );
    return (

        <div>
        <br/>
        <h3 className="text-center mt-5 mb-5" ><MDBAlert color="info" style={{width: '50%'}}>Please choose one hospital from the given list.</MDBAlert></h3>
        <MDBRow className="ml-2">
          {obj}
        </MDBRow>
        
        </div>
    );

}

export default HospitalList;