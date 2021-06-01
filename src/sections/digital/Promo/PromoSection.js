import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactSection from './../../contact/ContactOne/ContactSection'
import { Link } from '~components'
import Promo from "./style"
 
export default function PromoSection(){
return(
<Promo id='contact-us'>
  <Container >
 
    <Row className="justify-content-center">
      <Col className="col-xl-12">
        <Promo.ContentBox className="text-center">
  
          
            <ContactSection></ContactSection>
        
        </Promo.ContentBox>
      </Col>
    </Row>
  </Container>
</Promo>

)
}