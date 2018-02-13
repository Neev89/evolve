import React from 'react'
import Helmet from 'react-helmet'

//Images
import JobBannerShape from '../images/banner/job-list-banner.jpg'

//Applybtn
import ApplyBtn from '../components/ApplyBtn'

//Contact
import Contact from '../components/Contact'


const JobDetail = (props) => {
    const post = props.data.markdownRemark;
    const siteTitle = props.data.site.siteMetadata.title;
    const contactTitle = props.data.allDataJson.edges[0].node.front.contactTitle;
    const contactDescription = props.data.allDataJson.edges[0].node.front.contactDescription;
    const socialLinks = props.data.allDataJson.edges[0].node.socialLink;

    return (
        <div>
            <Helmet
                title={`${post.frontmatter.title} | ${siteTitle}`}
                bodyAttributes={{
                    class: 'job-section'
                }}
            />
            <section className="job-wrap detail">
                <div className="job-wrap__inner">
                    <div className="top-section">
                        <img src={JobBannerShape} alt="Job BannerImg"/>
                        <h1 className="title">Careers</h1>
                    </div>
                    <div className="content-wrap">
                        <div className="content">
                            <div className="job-heading icon" id={post.frontmatter.position}>
                                <h1>{post.frontmatter.title}</h1>
                                <div dangerouslySetInnerHTML={{__html: post.html}}/>
                                <ApplyBtn/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Contact title={contactTitle} description={contactDescription} links={socialLinks}/>
        </div>
    )
}

export default JobDetail

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        position
      }
    }
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