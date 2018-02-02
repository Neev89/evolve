import React from 'react'
import Link from 'gatsby-link'
import JobBannerShape from '../../images/banner/hiring-bg-shape.png'

import Contact from '../../components/Contact'

const JobsSection = () => (
    <div>
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
                    <div className="job-list__item icon position-software-icon">
                        <h3 className="title custom-border">Senior Software Engineer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="button-wrap">
                            <Link to="/job/jobdetail/" className="button button-plain">Apply</Link>
                        </div>
                    </div>

                    <div className="job-list__item icon position-frontend-icon">
                        <h3 className="title custom-border">Senior Front-end Engineer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="button-wrap">
                            <Link to="/job/jobdetail/" className="button button-plain">Apply</Link>
                        </div>
                    </div>

                    <div className="job-list__item icon position-mobile-icon">
                        <h3 className="title custom-border">Mobile Platform Engineer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="button-wrap">
                            <Link to="/job/jobdetail/" className="button button-plain">Apply</Link>
                        </div>
                    </div>

                    <div className="job-list__item icon position-product-icon">
                        <h3 className="title custom-border">Product Manager</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="button-wrap">
                            <Link to="/job/jobdetail/" className="button button-plain">Apply</Link>
                        </div>
                    </div>

                    <div className="job-list__item icon position-product-development-icon">
                        <h3 className="title custom-border">Product Development Manager</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="button-wrap">
                            <Link to="/job/jobdetail/" className="button button-plain">Apply</Link>
                        </div>
                    </div>

                    <div className="job-list__item icon position-qa-icon">
                        <h3 className="title custom-border">QA Engineer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="button-wrap">
                            <Link to="/job/jobdetail/" className="button button-plain">Apply</Link>
                        </div>
                    </div>

                    <div className="job-list__item icon position-devops-icon">
                        <h3 className="title custom-border">DevOps Engineer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="button-wrap">
                            <Link to="/job/jobdetail/" className="button button-plain">Apply</Link>
                        </div>
                    </div>

                    <div className="job-list__item icon position-data-engineer-icon">
                        <h3 className="title custom-border">Data Engineer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="button-wrap">
                            <Link to="/job/jobdetail/" className="button button-plain">Apply</Link>
                        </div>
                    </div>

                    <div className="job-list__item icon position-customer-support-icon">
                        <h3 className="title custom-border">Customer Support Engineer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="button-wrap">
                            <Link to="/job/jobdetail/" className="button button-plain">Apply</Link>
                        </div>
                    </div>

                    <div className="job-list__item icon position-data-visualization-icon">
                        <h3 className="title custom-border">Data Visualization Engineer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="button-wrap">
                            <Link to="/job/jobdetail/" className="button button-plain">Apply</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Contact/>
    </div>
)

export default JobsSection


