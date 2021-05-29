import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from '~components'
import { Images } from '~data'
import Hero from './style'
 
export default function HeroSection({data}){
 
  // const displayData = data.allMarkdownRemark.edges[0].node.frontmatter
  // console.log(displayData)
return(
<Hero style={{backgroundImage: `url(${Images.DigiTalagency.heroImg})`}}>
  <Container>
    <Row className="align-items-center justify-content-center">
      <Col className="col-xl-9">
        <Hero.Content className="text-center">
          <Hero.Icon><i className="fa fa-bell" /></Hero.Icon>
          <Hero.Title as="h1" fontColor="#fff">title</Hero.Title>
          <Hero.Text fontColor="#fff">description<br className="d-none d-xs-block" />
            and sales. </Hero.Text>
          {/* <Hero.Button as={Link} to="/"><a href={}>Get Started</a></Hero.Button> */}
        </Hero.Content>
      </Col>
    </Row>
  </Container>
</Hero>

)
}