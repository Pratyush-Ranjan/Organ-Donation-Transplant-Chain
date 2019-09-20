import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

const ContactPage = () => {
  return (
    <section className="my-5">
      <br></br>
     <h4 className="h3 display-3 text-center mt-5" >Contact Us</h4>
      <p className="text-center w-responsive mx-auto pb-5">
        Tell us what you feel. Any suggestion, query and appreciation is most welcome!
      </p>
      <MDBRow className= "ml-5 mr-5" > 
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header grey accent-1">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
              </div>
              
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Icon Prefix"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="grey">Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJU00q0-XGdjkRiZsM3JoGNPg&key=AIzaSyDhdbiC1ynn_IDjDXy46qgLMZUhd8PuoHA"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="grey" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>Gwalior, 474015</p>
              
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="grey" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>+ 91 945493213XX</p>
              
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="grey" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>organchain@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default ContactPage;