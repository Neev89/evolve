import React from 'react'
import PropTypes from 'prop-types'

import MapImg from "../../images/map.png"
import ContactBg from "../../images/contact-bg-shape.png"

const Contact = (props) => {
    const title = props.title;
    const description = props.description;
    const socials = props.links;

    return (
        <section className="section contact">
            <div className="contact-img">
                <img src={ContactBg} alt="Contact Banner Shape Img"/>
            </div>
            <div className="section__inner">
                <h2 className="section__title custom-border left">{title}</h2>
                <div className="contact__grid">
                    <div className="row">
                        <div className="col-xsmall-12 col-small-6">
                            <div className="map">
                                <p>{description}</p>
                                <img src={MapImg} alt="Contact Map"/>
                            </div>

                        </div>
                        <div className="col-xsmall-12 col-small-6">
                            <div className="information">
                                <div className="address">
                                    <address>
                                        <h4>Evolve Pvt. Ltd.</h4>
                                        <ul className="social">
                                            {socials.map((item, i) =>
                                                (
                                                    <li key={i}>
                                                        <a className={item.name} href={item.link}>
                                                            {item.text}
                                                        </a>
                                                    </li>
                                                )
                                            )}
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
}

Contact.PropTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    links: PropTypes.string,
}

export default Contact

