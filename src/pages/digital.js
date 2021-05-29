import React from "react";
import { PageWrapper } from "~components/Core";
import HeroSection from '~sections/digital/Hero'
import ServicesSection from '~sections/digital/Services'
import AboutSection from '~sections/digital/About'
import ContentSectionOne from '~sections/digital/ContentOne'
import ContentSectionTwo from '~sections/digital/ContentTwo'
// import TeamSection from '~sections/digital/Team'
import PortfolioSection from '~sections/digital/Portfolio'
import PromoSection from '~sections/digital/Promo'
import HeaderButton from '~sections/digital/Header'
import FooterSix from '~sections/digital/FooterSix'
import { StaticQuery, graphql } from "gatsby"

const header = {
  headerClasses: "site-header site-header--menu-end dark-header site-header--sticky",
  containerFluid:false,
  buttonBlock : <HeaderButton className="d-none d-sm-flex" children="Free SEO Analysis"/>,
  darkLogo:false,
}

const digital = () => (


<StaticQuery query={digitalPageData} render={data=>{
   
  return (
    <PageWrapper headerConfig={header}>
       <HeroSection data={data}/>
       <ServicesSection/>
       <AboutSection/>
        <ContentSectionOne data={data}/>
      <ContentSectionTwo/>
        {/* <TeamSection/> */}
       <PortfolioSection/>
       <PromoSection/>
       <FooterSix/>
    </PageWrapper>
  )
}}/>
)

export const digitalPageData = graphql`
  query digitalPageDatas{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/whoWeAre/"}} 
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            image1
            image2
          }
          
          excerpt
        }
      }
    }
  }`

export default digital;