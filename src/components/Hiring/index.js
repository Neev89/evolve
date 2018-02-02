import React from 'react'
import Link from 'gatsby-link'


import HiringShape from '../../images/banner/hiring-bg-shape.png'


const Hiring = props => (
    <section className="section hiring">
        <div className="hiring-img">
            <img src={HiringShape} alt="Hiring Banner Shape Img"/>
        </div>
        <div className="section__inner">
            <div className="hiring-wrap">
                <h1>We’re hiring</h1>
                <p>Evolve is looking for talented individuals to join our team. We welcome individuals looking to grow and expand their horizons.</p>
                <div className="button-wrap">
                    <Link to="/job/joblist/" className="button button-primary">View open positions</Link>
                </div>
            </div>
        </div>
    </section>
)

export default Hiring