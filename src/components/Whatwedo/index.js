import React from 'react'
import PropTypes from 'prop-types'

//Image
import Shape2 from '../../images/banner/what-we-do-banner-img.png'

const Whatwedo = (props) => {
    const title = props.title;
    const description = props.description;
    const text = props.information;

    return (
        <section className="section what-we-do-section">
            <div className="what-we-do-img">
                <img src={Shape2} alt="Whatwedo Banner Shape Img"/>
            </div>
            <div className="section__inner">
                <div className="what-we-do-wrap">
                    <h2 className="section__title custom-border">{title}</h2>
                    <p>{description}</p>
                    <div className="what-we-do-grid">
                        <ul className="what-we-do-list">
                            {text.map((item, i) =>
                                (
                                    <li key={i}>
                                        <div className="panel text-right">
                                            <a className="link">{item.linkText}</a>
                                        </div>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

Whatwedo.PropTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    information: PropTypes.string,
}


export default Whatwedo