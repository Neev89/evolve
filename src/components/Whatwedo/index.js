import React from 'react'
import Link from 'gatsby-link'

import Shape2 from '../../images/banner/what-we-do-banner-img.png'
import LogoShape from '../../images/ic_shape.svg'

const Whatwedo = props => (
    <section className="section what-we-do-section">
        <div className="what-we-do-img">
            <img src={Shape2} alt="Whatwedo Banner Shape Img"/>
        </div>
        <div className="section__inner">
            <div className="what-we-do-wrap">
                <h2 className="section__title custom-border">What we do</h2>
                <p>Evolve was founded to build technology platforms that enable FMCG distribution businesses to streamline and optimize operations.</p>
                <div className="what-we-do-grid">
                    <div className="row">
                        <div className="col-xsmall-12 col-small-4">
                            <div className="panel text-right">
                                <Link to="#">Continuously monitor and measure visibility</Link>
                                <Link to="#">Provide a wealth of metrics and reporting capabilities at a granular level</Link>
                            </div>
                        </div>
                        <div className="col-xsmall-12 col-small-4">
                            <div className="panel text-center">
                                <img src={LogoShape} alt="LogoShape"/>
                                <Link to="#">Standardize and drive compliance in sales fundamentals, merchandising, billing and delivery</Link>
                            </div>
                        </div>
                        <div className="col-xsmall-12 col-small-4">
                            <div className="panel text-left">
                                <Link to="#">Develop right GTM plans</Link>
                                <Link to="#">Effectively execute and manage sales and market support activities</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Whatwedo