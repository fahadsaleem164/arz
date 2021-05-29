import { StaticImage as Img} from 'gatsby-plugin-image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Content from './style'
 
export default function ContentSectionOne({whoWeAre}){

  const data =  whoWeAre.edges[0].node.frontmatter
  
return(
<Content>
  <Container>
    <Content.InnerBlock className="border-bottom"  id='who-we-are'>
      <Row className="justify-content-center">
        {/* about-us Content */}
        <Col xs="12" className="col-lg-7 col-md-6 col-xs-10">
          <Content.Box>
            <Content.Subtitle as="h6" mb="40px" fontColor="#fd346e">Who We Are</Content.Subtitle>
            <Content.Title as="h2" mb="30px" mbXL="50px">{data.title}</Content.Title>
            <Content.ImageOne mb="40px">
              {/* <Img src="../../../assets/image/home-digital-agency/content-l7-1.png" alt="About" placeholder="blurred" layout="fullWidth"/> */}
                {/* <Img src={displayData.image1} alt="About" placeholder="blurred" layout="fullWidth"/> */}
            <img src={data.image1}/>
            </Content.ImageOne>
          </Content.Box>
        </Col>
        {/*/ .about-us Content */}
        <Col xs="12" className="col-lg-4 offset-xl-1 col-md-6 col-xs-10">
            <Content.Subtitle as="h6" mb="30px" fontColor="#fd346e"></Content.Subtitle>
            <Content.Text mb="40px" mbXL="60px">{data.description}</Content.Text>
            <Content.ImageTwo mb="40px">
              {/* <Img src="../../../assets/image/home-digital-agency/content-l7-2.png" alt="About" placeholder="blurred" layout="fullWidth"/> */}
            <img src={data.image2} />            </Content.ImageTwo>
            {/* <Content.Text mb="30px" ptXL="30px">Everything we do is thoughtfully tied with creativity. We design and develop modern user friendly websites which incorporate your logo and branding according to your choice.</Content.Text> */}
        </Col>
      </Row>
    </Content.InnerBlock>
  </Container>
</Content>

)
}