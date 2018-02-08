import React from 'react'

//Components
import HeroBanner from '../components/Herobanner'
import Whatwedo from '../components/Whatwedo'
import Hiring from '../components/Hiring'
import Contact from '../components/Contact'
import Technologies from "../components/Technologies";

const IndexPage = (props) => {
        const heroTitle = props.data.allDataJson.edges[0].node.front.heroTitle;
        const whatWeDoTitle = props.data.allDataJson.edges[0].node.front.whatWeDoTitle;
        const whatWeDoDescription = props.data.allDataJson.edges[0].node.front.whatWeDoDescription;
        const whatWeDoText = props.data.allDataJson.edges[0].node.whatWeDo;
        const techTitle = props.data.allDataJson.edges[0].node.front.techTitle;
        const techDescription = props.data.allDataJson.edges[0].node.front.techDescription;
        const hiringTitle = props.data.allDataJson.edges[0].node.front.hiringTitle;
        const hiringDescription = props.data.allDataJson.edges[0].node.front.hiringDescription;
        const contactTitle = props.data.allDataJson.edges[0].node.front.contactTitle;
        const contactDescription = props.data.allDataJson.edges[0].node.front.contactDescription;
        const areasInterestText = props.data.allDataJson.edges[0].node.areasInterest;
        const socialLinks = props.data.allDataJson.edges[0].node.socialLink;

        return (
            <div>
                <div className="main-content__inner">
                    <HeroBanner title={heroTitle}/>
                    <Whatwedo title={whatWeDoTitle} description={whatWeDoDescription} information={whatWeDoText}/>
                    <Technologies title={techTitle} description={techDescription} areasText={areasInterestText}/>
                    <Hiring title={hiringTitle} description={hiringDescription}/>
                    <Contact title={contactTitle} description={contactDescription} links={socialLinks}/>
                </div>
            </div>
        )
    }
;

export default IndexPage

export const pageQuery = graphql`
query IndexQuery {
    allDataJson {
      edges {
        node {
            front {
                heroTitle
                whatWeDoTitle
                whatWeDoDescription
                techTitle
                techDescription
                hiringTitle
                hiringDescription
                contactTitle
                contactDescription
            }
            whatWeDo {
                linkText
            }
            areasInterest {
                text
            }
            socialLink {
                name
                link
                text
            }
          }
       }
    }
}
`

