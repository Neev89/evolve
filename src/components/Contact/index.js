import React from 'react'

import MapImg from "../../images/map.png"
import ContactBg from "../../images/contact-bg-shape.png"

const Contact = () => (
    <section className="section contact">
        <div className="contact-img">
            <img src={ContactBg} alt="Contact Banner Shape Img"/>
        </div>
        <div className="section__inner">
            <h2 className="section__title custom-border left">Contact</h2>
            <div className="contact__grid">
                <div className="row">
                    <div className="col-xsmall-12 col-small-6">
                        <div className="map">
                            <p>Find us on Google Maps</p>
                            <img src={MapImg} alt="Contact Map"/>
                        </div>

                    </div>
                    <div className="col-xsmall-12 col-small-6">
                        <div className="information">
                            <div className="address">
                                <address>
                                    <h4>Evolve Pvt. Ltd.</h4>
                                    <ul className="social">
                                        <li><a className="location">7th Floor, Trade Tower, Thapathali, Kathmandu</a></li>
                                        <li><a className="mail" href="mailto:info@evolveasia.co">info@evolveasia.co</a></li>
                                        <li><a className="linkedin" href="https://www.linkedin.com/company/13624262/">Linkedin</a></li>
                                    </ul>
                                </address>
                            </div>
                            <div className="copyright">
                                <p>© Copyright 2018. <strong>Evolve</strong> Pvt Ltd. </p>
                                <a href="#" className="chat-bubble">Bubble</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Contact

