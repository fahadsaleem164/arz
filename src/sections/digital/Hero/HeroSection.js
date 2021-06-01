import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from '~components'
import { Images } from '~data'
import Hero from './style'
 
export default function HeroSection({mainSection}){

  const data = mainSection.edges[0].node.frontmatter


return(
<Hero style={{backgroundImage: `url(${Images.DigiTalagency.heroImg})`}}>
  <Container>
    <Row className="align-items-center justify-content-center">
      <Col className="col-xl-9">
        <Hero.Content className="text-center">
          <Hero.Icon><i className="fa fa-bell" /></Hero.Icon>
          <Hero.Title as="h1" fontColor="#fff">{data.title}</Hero.Title>
          <Hero.Text fontColor="#fff">
            {data.text}
            </Hero.Text>
          <Hero.Button as={Link}  href='#contact-us'>Contact Us</Hero.Button>
        </Hero.Content>
      </Col>
    </Row>
  </Container>
</Hero>

)
}