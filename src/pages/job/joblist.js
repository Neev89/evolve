import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

//Images
import JobBannerShape from '../../images/banner/job-list-banner.jpg'


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
                    <div className="top-section">
                        <img src={JobBannerShape} alt="Job Banner"/>
                        <h1 className="title">Careers</h1>
                    </div>
                    <div className="content">
                        <div className="job-heading">
                            <h3>We're hiring</h3>
                            <p>Evolve is growing and looking for talented individuals to help us on our mission to disrupt an entire industry, here at home.</p>
                            <p>We’re building a strong team of amazing individuals. Individuals who want to find a purpose in their work. We have a common interest in technology and good design, exploring our passion in finding solutions to hard problems.</p>
                            <p>We work hard and have fun while doing it. And then we go home. That balance is important: It enables us to do the best work of our lives.</p>
                            <p>As a result, we are creating a place where as individuals, we are breaking our boundaries and expanding our horizons. All the while working alongside people we respect and admire.</p>
                            <p>Work with us.</p>
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


