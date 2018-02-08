import React from 'react'
import PropTypes from 'prop-types';

import HeroBannerImg1 from '../../images/banner/hero-banner-img-1.png'

const HeroBanner = (props) => {
    const title = props.title;

    return (
        <section className="section hero-section">
            <div className="section__inner">
                <h1>{title}</h1>
                <div className="hero-image">
                    <img src={HeroBannerImg1} alt="BannerImg 1"/>
                </div>
            </div>
        </section>
    )
}

HeroBanner.PropTypes = {
    title: PropTypes.string,
}

export default HeroBanner
