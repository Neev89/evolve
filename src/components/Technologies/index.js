import React from 'react'

import TechShape from '../../images/tech-bg-shape.png'
import AndroidLogo from '../../images/mobile-logos/android-logo.svg'
import IosLogo from '../../images/mobile-logos/apple-ios-logo.svg'
import KotlinLogo from '../../images/mobile-logos/kotlin-logo.svg'
import ReactiveX from '../../images/mobile-logos/reactivex-logo.svg'
import SwiftLogo from '../../images/mobile-logos/swift-logo.svg'

const Technologies = props => (
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
                                <p>Our mission is to drive the transformation in FMCG distribution through a combination of process re-engineering, introduction and application of information
                                    technology, automation and artificial intelligence to deliver efficiency for our customers.</p>
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
)

export default Technologies