import React from 'react'
import HeroBannerImg1 from '../../images/banner/hero-banner-img-1.png'

const HeroBanner = props => (
    <section className="section hero-section">
        <div className="section__inner">
            <h1>Building effective distribution.</h1>
            <div className="hero-image">
                <img src={HeroBannerImg1} alt="BannerImg 1"/>
            </div>
        </div>
    </section>
)

export default HeroBanner
