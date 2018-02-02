import React from 'react'
import Link from 'gatsby-link'
import JobBannerShape from '../../images/banner/hiring-bg-shape.png'


import Contact from '../../components/Contact'

const JobDetail = () => (
    <div>
        <section className="job-wrap detail">
            <div className="job-wrap__inner">
                <div className="job-heading icon position-software-icon">
                    <h1>Senior Software Engineer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo.</p>
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
        <Contact/>
    </div>
)

export default JobDetail
