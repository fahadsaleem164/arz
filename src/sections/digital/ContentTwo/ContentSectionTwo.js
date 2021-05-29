import React from 'react'
import { StaticImage as Img} from 'gatsby-plugin-image'
import { Col, Container, Row } from 'react-bootstrap'
import Content from './style'
 
export default function ContentSectionTwo({...rest}){
  // console.log(rest)
  const data =  rest.ourMission.edges[0].node.frontmatter

return(
<Content {...rest} id='our-mission'>
  <Container>
    <Row className="align-items-center justify-content-center">
      <Col xs="12" className="col-xl-6 col-lg-7 col-md-8 col-xs-9 order-2 order-lg-1">
        {/* Section Title */}
        <Content.Box>
          <Content.Subtitle fontColor="#fd346e" as="h4">Our Mission</Content.Subtitle>
          <Content.Title as="h2">{data.title}</Content.Title>
          <Content.Text>{data.description}<br className="d-none d-md-block" /> businesses prospects of a
            client, with the aim of<br className="d-none d-md-block" /> advancing their business or company. </Content.Text>
            <a href={data.link}>
          <Content.Button pl="15px" pr="15px" sizeY="56px" sizeX="168px" className="btn" mt="40px">Contact Us</Content.Button></a>
        </Content.Box>
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-5 col-sm-8 col-xs-10 order-1 order-lg-2">
        <Content.Images>
          <Content.ImageOne>
          <Content.ImageOneInner>
            {/* <Img src="../../../assets/image/home-digital-agency/1.jpg" alt="Content" layout="fullWidth" placeholder="blurred"/> */}
            <img src={data.image1} />
          </Content.ImageOneInner>
          </Content.ImageOne>
          <Content.ImageTwo>
          <Content.ImageTwoInner>
            {/* <Img src="../../../assets/image/home-digital-agency/2.jpg" alt="Content" layout="fullWidth" placeholder="blurred"/> */}
            <img src={data.image2} />
          </Content.ImageTwoInner>
          </Content.ImageTwo>
        </Content.Images>
      </Col>
    </Row>
  </Container>
</Content>

)
}