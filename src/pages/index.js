import React from "react";
import { PageWrapper } from "~components/Core";
// import HeroSection from '~sections/digital/Hero'
import HeroSection from '~sections/agency/Hero'
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

  console.log(data.mainSection)
   
  return (
    <PageWrapper headerConfig={header}>
       <HeroSection mainSection={data.mainSection} />
       <ServicesSection whatWeDo={data.whatWeDo}/>
       <AboutSection whyChooseUs={data.whyChooseUs} />
        <ContentSectionOne whoWeAre={data.whoWeAre}/>
        <ContentSectionTwo ourMission={data.ourMission}/>
        {/* <TeamSection/> */}
       <PortfolioSection caseStudy={data.caseStudy}/>
       <PromoSection/>
       <FooterSix/>
    </PageWrapper>
  )
}}/>
)

export const digitalPageData = graphql`
  {
    whoWeAre :  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/whoWeAre/"}} 
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

    ourMission: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/ourMission/"}}
    )  {
      edges {
        node {
          id
          frontmatter {
            
            title
            description
            image1
            image2
            
          }
        }
      }
    }

    whyChooseUs: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/whyUseUs/"}}
    )  {
      edges {
        node {
          id
          frontmatter {
            
            title
            description
            video  
            projects_done
            conservation_rate
            return_happy_customer
          }
        }
      }
    }


    caseStudy: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/caseStudy/"}}
    )  {
      edges {
        node {
          frontmatter {
            title
            image2
            image1
            description
            Case_Studies {
              title
              image
              description
            }
          }
        }
      }
    }


    whatWeDo: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/ourServices/"}}
    )  {
      edges {
        node {
          frontmatter {
            title
            description
            ourservices {
              title
              description
              image
            }
           
          }
        }
      }
    }


    mainSection: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/mainSection/"}}
    )  {
      edges {
        node {
          frontmatter {
            title
            text
          }
        }
      }
    }



    


    


   




    


  }`

export default digital;