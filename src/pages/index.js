import React from 'react'
import Link from 'gatsby-link'

import Contact from '../components/Contact'

import HeroBannerImg1 from '../images/banner/hero-banner-img-1.png'
import Shape2 from '../images/banner/what-we-do-banner-img.png'
import LogoShape from '../images/ic_shape.svg'
import HiringShape from '../images/banner/hiring-bg-shape.png'
import TechShape from '../images/tech-bg-shape.png'

import AndroidLogo from '../images/mobile-logos/android-logo.svg'
import IosLogo from '../images/mobile-logos/apple-ios-logo.svg'
import KotlinLogo from '../images/mobile-logos/kotlin-logo.svg'
import ReactiveX from '../images/mobile-logos/reactivex-logo.svg'
import SwiftLogo from '../images/mobile-logos/swift-logo.svg'

const IndexPage = () => (
    <div className="main-content__inner">
        <section className="section hero-section">
            <div className="section__inner">
                <h1>Building effective distribution.</h1>
                <div className="hero-image">
                    <img src={HeroBannerImg1} alt="BannerImg 1"/>
                </div>
            </div>
        </section>

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

        <section className="section technologies">
            <div className="tech-img">
                <img src={TechShape} alt="Technologies Banner Shape Img"/>
            </div>
            <div className="section__inner">
                <div className="technologies-wrap">
                    <div className="row">
                        <div className="col-xsmall-12 col-small-5">
                            <div className="technologies__inner left">
                                <div className="content">
                                    <h2 className="section__title custom-border left">Technologies we use</h2>
                                    <p>Our mission is to drive the transformation in FMCG distribution through a combination of process re-engineering, introduction and application of information technology, automation and artificial intelligence to deliver efficiency for our customers.</p>
                                </div>
                                <div className="content sm">
                                    <h2 className="section__title custom-border left">Our areas of interest</h2>
                                    <ul>
                                        <li><span>#Distributed_Computing</span></li>
                                        <li><span>#SaaS</span></li>
                                        <li><span>#Data_Engineering</span></li>
                                        <li><span>#Cloud_Storage</span></li>
                                        <li><span>#Kubernetes</span></li>
                                        <li><span>#Cloud_Computing</span></li>
                                        <li><span>#Distributed_Computing</span></li>
                                        <li><span>#Deep_Learning</span></li>
                                        <li><span>#Artificial_Learning</span></li>
                                        <li><span>#Data_Visualization</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xsmall-12 col-small-7">
                            <div className="technologies__inner right">
                                <div className="platform">
                                    <div className="content">
                                        <h6>Mobile Development</h6>
                                        <ul>
                                            <li><img src={AndroidLogo} alt="Android Logo"/></li>
                                            <li><img src={IosLogo} alt="IOS Logo"/></li>
                                            <li><img src={KotlinLogo} alt="Kotlin Logo"/></li>
                                            <li><img src={ReactiveX} alt="Reactivex Logo"/></li>
                                            <li><img src={SwiftLogo} alt="Swift Logo"/></li>
                                        </ul>
                                    </div>
                                    <div className="content">
                                        <h6>Web Development</h6>
                                        <ul>
                                            <li><img src={ReactiveX} alt="Reactivex Logo"/></li>
                                            <li><img src={SwiftLogo} alt="Swift Logo"/></li>
                                            <li><img src={AndroidLogo} alt="Android Logo"/></li>
                                            <li><img src={IosLogo} alt="IOS Logo"/></li>
                                            <li><img src={KotlinLogo} alt="Kotlin Logo"/></li>
                                            <li><img src={ReactiveX} alt="Reactivex Logo"/></li>
                                            <li><img src={SwiftLogo} alt="Swift Logo"/></li>
                                            <li><img src={AndroidLogo} alt="Android Logo"/></li>
                                            <li><img src={IosLogo} alt="IOS Logo"/></li>
                                            <li><img src={KotlinLogo} alt="Kotlin Logo"/></li>
                                            <li><img src={ReactiveX} alt="Reactivex Logo"/></li>
                                            <li><img src={SwiftLogo} alt="Swift Logo"/></li>
                                            <li><img src={KotlinLogo} alt="Kotlin Logo"/></li>

                                        </ul>
                                    </div>
                                    <div className="content">
                                        <h6>UI/UX</h6>
                                        <ul>
                                            <li><img src={AndroidLogo} alt="Android Logo"/></li>
                                            <li><img src={IosLogo} alt="IOS Logo"/></li>
                                            <li><img src={KotlinLogo} alt="Kotlin Logo"/></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section hiring">
            <div className="hiring-img">
                <img src={HiringShape} alt="Hiring Banner Shape Img"/>
            </div>
            <div className="section__inner">
                <div className="hiring-wrap">
                    <h1>We’re hiring</h1>
                    <p>Evolve is looking for talented individuals to join our team. We welcome individuals looking to grow and expand their horizons.</p>
                    <div className="button-wrap">
                        <Link to="/joblist/" className="button button-primary">View open positions</Link>
                    </div>
                </div>
            </div>
        </section>

        <Contact/>
    </div>
)

export default IndexPage
