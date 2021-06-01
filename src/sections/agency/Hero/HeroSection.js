import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Video from '~components/VideoModal'
import { Images } from '~data'
 import Hero from "./style"
export default function HeroSection({mainSection}){
  console.log(mainSection.edges)

  const data = mainSection.edges[0].node.frontmatter

return(
<Hero backgroundImage={Images.agency.heroImg} backgroundOverlay={Images.agency.heroImgOverlay}>
  <Container>
    <Row className="align-items-center justify-content-center justify-content-md-start">
      {/* Welcome content Area */}
      <Col className="col-xxl-6 col-xl-7 col-lg-8 col-md-8 col-xs-11 order-2 order-lg-1">
        <Hero.Content mb="40px" mbMD="40px" mt="30px" mtLG="0">
        <Hero.Title as="h1" fontColor="#fff">{data.title}</Hero.Title>
          <Hero.Text>
             {data.text}
          </Hero.Text>
        </Hero.Content>
      </Col>
      {/*/ .Welcome Content Area */}
    </Row>
  </Container>
</Hero>
)
}