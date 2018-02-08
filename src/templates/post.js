import React from 'react'
import Helmet from 'react-helmet'

//Images
import JobBannerShape from '../images/banner/hiring-bg-shape.png'

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
            <Helmet title={`${post.frontmatter.title} | ${siteTitle}`}/>
            <section className="job-wrap detail">
                <div className="job-wrap__inner">
                    <div className="job-heading icon" id={post.frontmatter.position}>
                        <h1>{post.frontmatter.title}</h1>
                        <div dangerouslySetInnerHTML={{__html: post.html}}/>
                    </div>
                    <div className="job-image">
                        <img src={JobBannerShape} alt="Job BannerImg"/>
                    </div>
                    <div className="application-form">
                        <h3 className="form__title">Fill up the form to apply</h3>
                        <form method="post" action="" className="form__inline">
                            <div className="row">
                                <div className="col-xsmall-12 col-small-6">
                                    <div className="form-item">
                                        <label>Full Name</label>
                                        <input type="text" name="name"/>
                                    </div>
                                </div>
                                <div className="col-xsmall-12 col-small-6">
                                    <div className="form-item">
                                        <label>Email</label>
                                        <input type="email" name="email"/>
                                    </div>
                                </div>
                                <div className="col-xsmall-12 col-small-6">
                                    <div className="form-item">
                                        <label>Phone</label>
                                        <input type="number" name="phone"/>
                                    </div>
                                </div>
                                <div className="col-xsmall-12 col-small-6">
                                    <div className="form-item">
                                        <label>Linkedin Profile Link</label>
                                        <input type="text" name="profile"/>
                                    </div>
                                </div>
                                <div className="col-xsmall-12">
                                    <div className="form-item">
                                        <label>Resume</label>
                                        <input type="text" name="resume"/>
                                    </div>
                                </div>
                                <div className="col-xsmall-12">
                                    <div className="form-item">
                                        <label>Additional Information <span className="desc block">Feel free to add any additional information here :)</span></label>
                                        <textarea rows="6"></textarea>
                                    </div>
                                </div>
                                <div className="col-xsmall-12">
                                    <div className="form-item">
                                        <label>Why do you want to work at Evolve?</label>
                                        <textarea rows="6"></textarea>
                                    </div>
                                </div>
                                <div className="col-xsmall-12">
                                    <div className="form-item form-buttons">
                                        <button type="submit" className="button button-primary">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </form>
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