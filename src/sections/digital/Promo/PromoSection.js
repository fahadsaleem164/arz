import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactSection from './../../contact/ContactOne/ContactSection'
import { Link } from '~components'
import Promo from "./style"
 
export default function PromoSection(){
return(
<Promo id='contact-us'>
  <Container >
  <ContactSection></ContactSection>
    {/* <Row className="justify-content-center">
      <Col className="col-xl-12">
        <Promo.ContentBox className="text-center">
          <Promo.Box>
            <Promo.Title as="h2" fontColor="#fff" mb="25px">Contact<br className="d-none d-lg-block" /></Promo.Title>
           
          </Promo.Box>
        </Promo.ContentBox>
      </Col>
    </Row> */}
  </Container>
</Promo>

)
}