import React from 'react'
import Contact from './style'
import SectionTitle from './Components/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
export default function ContactOne(){
return(
<Contact backgroundColor="#f3f4f6">
  <Container>
    <Row>
      <Col className="col-xl-7 col-lg-7">
        <Contact.Box >
            <SectionTitle
            subTitle="Contact Us" 
            title="Send A Message"
            text=""
            subTitleProps={{mb:"10px"}}
            titleProps={{mb:"10px",as:"h2"}}
            mb="50px" />
        </Contact.Box>
        <Contact.From>
               <form name="contact" method="POST" data-netlify="true">
                    <Row>

                      <Col xs="12" className="col-lg-6 mb-4">

                        <div className="form-floating">
                          <input className="form-control" placeholder="Leave a comment here" id="floatinginput" name='email' required='required' />
                          <input type="hidden" name="form-name" value="arzpk-contact"></input>
                          <label htmlFor="floatinginput">Your Email</label>
                        </div>
                      </Col>
                      <Col xs="12" className="col-lg-6 mb-4">
                        <div className="form-floating">
                          <input className="form-control" placeholder="Leave a comment here" id="floatinginput2" name='phone_number'  required='required'/>
                          <label htmlFor="floatinginput2">Phone number</label>
                        </div>
                      </Col>
                      <Col xs="12" className="col-lg-12">
                        <div className="form-floating">
                          <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea3" name='message'  required='required'/>
                          <label htmlFor="floatingTextarea3">Your Message Here </label>
                        </div>
                      </Col>
                      <Col xs="12" className="col-lg-12">
                        <Row className="align-items-center mt-3">
                          <div className="col-md-8 col-lg-7 col-md-6 col-xl-8 pt-3">
                            <div className="form-check d-flex align-items-center">
                              <input className="form-check-input bg-white float-none mt-0" type="checkbox" defaultValue id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault">
                                Your email address will not be published
                              </label>
                            </div>
                          </div>
                          <Col xs="12" className="col-md-4 col-lg-5 col-xl-4 text-md-end pt-3">
                            <Contact.Button>Send Message</Contact.Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </form>
        </Contact.From>
      </Col>
    </Row>
  </Container>
</Contact>

)
}