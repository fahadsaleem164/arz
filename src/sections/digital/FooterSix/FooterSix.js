import { Link } from '~components'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Images } from '~data'
import Footer from "./style"

export default function FooterSix({contactDetails}){


  const data =  contactDetails.edges[0].node.frontmatter
return(
    <Footer>
    <Container>
        <Footer.Box pbXL="95px">
        <Row>
            <Col xs="12" className="col-lg-3 col-md-7 col-xs-9">
            <Footer.Widgets className="footer-widgets footer-widgets--l7">
                {/* Brand Logo*/}
                <Footer.Box mb="30px">
                    <Link  to="#">
                        <img src={Images.FooterSix.LogoBlack} alt="logo" />
                    </Link>
                </Footer.Box>
                {/* <Footer.Text mb="36px">
                    We’re the digital agency to create<br className="d-none d-xl-block" /> your digital presence for better<br className="d-none d-xl-block" /> conversion and sales.
                </Footer.Text> */}
                    {/* <Footer.SocialShare>
                        <Footer.SocialShareItem>
                            <a href="#">
                            <i className="fab fa-facebook-square" />
                            </a>
                        </Footer.SocialShareItem>
                        <Footer.SocialShareItem>
                            <a href="#">
                            <i className="fab fa-twitter" />
                            </a>
                        </Footer.SocialShareItem>
                        <Footer.SocialShareItem>
                            <a href="#">
                            <i className="fab fa-instagram" />
                            </a>
                        </Footer.SocialShareItem>
                        <Footer.SocialShareItem>
                            <a href="#">
                            <i className="fab fa-linkedin" />
                            </a>
                        </Footer.SocialShareItem>
                    </Footer.SocialShare> */}
            </Footer.Widgets>
            </Col>
            <Col xs="12" className="col-lg-9">
            <Row>
                <Col xs="12" className="col-md-4 col-xs-6">
                    <Footer.Widgets>
                        <Footer.Title>Contact Details</Footer.Title>
                        <Footer.Address className="widgets-address">
                            <Footer.AddressItem>
                                <i className="fa fa-map-marker-alt" />
                                <span>Address: <br className="d-block" />
                                       <div dangerouslySetInnerHTML={{ __html: data.address }}></div> 
                                </span>
                            </Footer.AddressItem>
                            <Footer.AddressItem>
                                <i className="fa fa-phone-alt" />
                                
                                <a href="#"><span> Phone: </span><br className="d-block" />{data.phone}</a>
                            </Footer.AddressItem>
                            <Footer.AddressItem>
                                <i className="fa fa-envelope" />
                                <a href="mailto:info@medcartel.com">
                                <span className="d-block"> Email:
                                </span>{data.email}</a>
                            </Footer.AddressItem>
                        </Footer.Address>
                    </Footer.Widgets>
                </Col>
                <Col xs="12" className="col-md-4 col-xs-6">
                <Footer.Widgets>
                    <Footer.Title>AZK AI</Footer.Title>
                    <Footer.List>
                        <Footer.ListItems>
                            <a href="#what-we-do">What We Do</a>
                        </Footer.ListItems>
                        <Footer.ListItems>
                            <a href="#why-choose-us">Why Choose Us</a>
                        </Footer.ListItems>
                        <Footer.ListItems>
                            <a href="#who-we-are">Who We Are</a>
                        </Footer.ListItems>
                        <Footer.ListItems>
                            <a href="#our-mission">Our Mission</a>
                        </Footer.ListItems>
                        <Footer.ListItems>
                            <a href="#case-studies">Case Studies</a>
                        </Footer.ListItems>
                        <Footer.ListItems>
                            <a href="#contact-us">Contact Us</a>
                        </Footer.ListItems>
                    </Footer.List>
                </Footer.Widgets>
                </Col>
                <Col xs="12" className="col-md-4 col-xs-9">
                {/* <Footer.Widgets>
                    <Footer.Title>Newsletter</Footer.Title>
                    <Footer.Text>Get the latest trends updates right at your inbox.</Footer.Text> */}
                    {/* Newsletter */}
                    {/* <Footer.Newsletter>
                        <form action="/.">
                            <input type="text" placeholder="Enter Your Email" />
                            <Footer.NewsletterBtn backgroundColor="#fd346e" hoverTextColor="#fff" textColor="#fff" sizeX="150px" sizeY="56px" type="submit">Subscribe</Footer.NewsletterBtn>
                        </form>
                    </Footer.Newsletter> */}
                    {/*/ .Newsletter */}
                {/* </Footer.Widgets> */}
                </Col>
            </Row>
            </Col>
        </Row>
        </Footer.Box>
        <Footer.Copyright>
        <Footer.CopyrightText>© 2021 AZK AI. All Rights Reserved</Footer.CopyrightText>
        </Footer.Copyright>
    </Container>
    </Footer>
)
}