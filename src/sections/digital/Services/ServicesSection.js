import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ServiceCard from './Components/Card'
import Service from "./style"
 
import {Images} from "~data"

export default function ServicesSection({whatWeDo}){

  const data = whatWeDo.edges[0].node.frontmatter
  console.log(data.ourservices)


return(
<Service id='what-we-do'>
  <Container>
    <Row>
      <Col xs="12" className="col-xl-5 col-lg-6 col-md-9 col-xs-10 order-2 order-lg-1">
          <Service.Subtitle fontColor="#fd346e" as="h4" mb="22px">What We Do</Service.Subtitle>
          <Service.Title as="h2"  mb="40px">{data.title}</Service.Title>
          {/* <a href={data.link}> */}
          {/* <Service.Button pl="15px" pr="15px" sizeY="56px" sizeX="168px" className="btn">Learn More</Service.Button> */}
          {/* </a> */}
      </Col>
      <Col xs="12" className="col-xxl-6 offset-xxl-1 col-xl-7 col-lg-6 col-md-11 order-1 order-lg-2">
        <Service.Box mlXL="35px" mb="20px" mbLG="0px">
            <Service.Text mb="40px">
              {data.description}
            </Service.Text>

            {data.ourservices.map((tag,index) => {
              
             return(
              
                
            <ServiceCard image={tag.image} title={tag.title} text={tag.description} mb="25px"/>
         
             )})}
       
        </Service.Box>
      </Col>
    </Row>
  </Container>
</Service>

)
}