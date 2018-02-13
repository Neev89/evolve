import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

//Images
import HiringShape from '../../images/banner/hiring-bg-shape.png'

const Hiring = (props) => {
    const title = props.title;
    const description = props.description;

    return (
        <section className="section hiring">
            <div className="hiring-img">
                <img src={HiringShape} alt="Hiring Banner Shape Img"/>
            </div>
            <div className="section__inner">
                <div className="hiring-wrap">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <div className="button-wrap">
                        <Link to="/job/joblist/" className="button button-primary">View open positions</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

Hiring.PropTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

export default Hiring