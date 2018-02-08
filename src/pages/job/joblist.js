import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

//Images
import JobBannerShape from '../../images/banner/hiring-bg-shape.png'


import Contact from '../../components/Contact'

const JobsSection = (props) => {
    const siteTitle = props.data.site.siteMetadata.title;
    const posts = props.data.allMarkdownRemark.edges;
    const contactTitle = props.data.allDataJson.edges[0].node.front.contactTitle;
    const contactDescription = props.data.allDataJson.edges[0].node.front.contactDescription;
    const socialLinks = props.data.allDataJson.edges[0].node.socialLink;

    return (
        <div>
            <Helmet title={siteTitle}/>
            <section className="job-wrap">
                <div className="job-wrap__inner">
                    <div className="job-heading">
                        <h1>Jobs</h1>
                        <p>Evolve is looking for talented individuals to join our team. We welcome individuals looking to grow and expand their horizons.</p>
                    </div>
                    <div className="job-image">
                        <img src={JobBannerShape} alt="Job BannerImg"/>
                    </div>
                    <div className="job-list-wrap">

                        {posts.map(post => {
                            if (post.node.path !== '/404/') {
                                const title = get(post, 'node.frontmatter.title') || post.node.path
                                return (
                                    <div className="job-list__item icon" id={post.node.frontmatter.position} key={post.node.frontmatter.path}>
                                        <h3 className="title custom-border">
                                            <Link to={post.node.frontmatter.path}>
                                                {post.node.frontmatter.title}
                                            </Link>
                                        </h3>
                                        <p dangerouslySetInnerHTML={{__html: post.node.excerpt}}/>
                                        <div className="button-wrap">
                                            <Link to={post.node.frontmatter.path} className="button button-plain">Apply</Link>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </section>
            <Contact title={contactTitle} description={contactDescription} links={socialLinks}/>
        </div>
    )
}

export default JobsSection

JobsSection.propTypes = {
    route: React.PropTypes.object,
}

export const pageQuery = graphql`
  query BlogPost {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
            position
          }
        }
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


