import React from 'react'
import PropTypes from 'prop-types'
import TechShape from '../../images/tech-bg-shape.png'

//Mobile-Images
import AndroidLogo from '../../images/mobile-logos/android-logo.svg'
import IosLogo from '../../images/mobile-logos/apple-ios-logo.svg'
import KotlinLogo from '../../images/mobile-logos/kotlin-logo.svg'
import ReactiveX from '../../images/mobile-logos/reactivex-logo.svg'
import SwiftLogo from '../../images/mobile-logos/swift-logo.svg'

//Web-Images
import ReactLogo from '../../images/mobile-logos/react-logo.svg'
import AngularLogo from '../../images/mobile-logos/angular-logo.svg'
import NodejsLogo from '../../images/mobile-logos/nodejs-logo.svg'
import LeafletLogo from '../../images/mobile-logos/leaflet-logo.svg'
import PhpLogo from '../../images/mobile-logos/php-logo.svg'
import PhythonLogo from '../../images/mobile-logos/python-logo.svg'
import GopherLogo from '../../images/mobile-logos/gopher-logo.svg'
import JavaLogo from '../../images/mobile-logos/java-logo.svg'
import ScalaLogo from '../../images/mobile-logos/scala-logo.svg'
import MySqlLogo from '../../images/mobile-logos/mysql-logo.svg'
import MariaDbLogo from '../../images/mobile-logos/mariadb-logo.svg'
import AerospikeLogo from '../../images/mobile-logos/aerospike-logo.svg'
import PostgreSqlLogo from '../../images/mobile-logos/postgresql-logo.svg'
import MicrosoftSqlLogo from '../../images/mobile-logos/microsoft-sql-server-logo.svg'

//Infrastructure-Images
import GoogleCloudLogo from '../../images/mobile-logos/google-cloud-logo.svg'
import OpenStackLogo from '../../images/mobile-logos/openstack-logo.svg'
import DockerLogo from '../../images/mobile-logos/docker-logo.svg'
import AnsibleLogo from '../../images/mobile-logos/ansible-logo.svg'
import ApacheLogo from '../../images/mobile-logos/apache-cloudstack-logo.svg'
import FirebaseLogo from '../../images/mobile-logos/firebase-logo.svg'

//Project-Management-Images
import GitlabLogo from '../../images/mobile-logos/gitlab-logo.svg'
import JiraLogo from '../../images/mobile-logos/jira-logo.svg'
import ConfluenceLogo from '../../images/mobile-logos/confluence-logo.svg'
import SlackLogo from '../../images/mobile-logos/slack-logo.svg'

//UI-Images
import SketchLogo from '../../images/mobile-logos/sketch-logo.svg'
import PrincipleLogo from '../../images/mobile-logos/principle-logo.svg'
import InvisionLogo from '../../images/mobile-logos/invision-logo.svg'

const Technologies = (props) => {
    const title = props.title;
    const description = props.description;
    const areas = props.areasText;

    return (
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
                                    <h2 className="section__title custom-border left">{title}</h2>
                                    <p>{description}</p>
                                </div>
                                <div className="content sm">
                                    <h2 className="section__title custom-border left">Our areas of interest</h2>
                                    <ul>
                                        {areas.map((item, i) =>
                                            (
                                                <li key={i}>
                                                    <span>#{item.text}</span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xsmall-12 col-small-7">
                            <div className="technologies__inner right">
                                <div className="platform">
                                    <div className="content">
                                        <h6>Mobile platform</h6>
                                        <ul>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Android"><img src={AndroidLogo} alt="Android Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="IOS"><img src={IosLogo} alt="IOS Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Kotlin"><img src={KotlinLogo} alt="Kotlin Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="ReactiveX"><img src={ReactiveX} alt="Reactivex Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Swift"><img src={SwiftLogo} alt="Swift Logo"/></span></li>
                                        </ul>
                                    </div>
                                    <div className="content">
                                        <h6>Web Platform</h6>
                                        <ul>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="React Js"><img src={ReactLogo} alt="ReactJs Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Angular Js"><img src={AngularLogo} alt="AngularJs Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Node Js"><img src={NodejsLogo} alt="NodeJs Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Leaflet"><img src={LeafletLogo} alt="Leaflet Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Php"><img src={PhpLogo} alt="Php Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Python"><img src={PhythonLogo} alt="Python Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Gopher"><img src={GopherLogo} alt="Gopher Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Java"><img src={JavaLogo} alt="Java Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Scala"><img src={ScalaLogo} alt="Scala Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Mysql"><img src={MySqlLogo} alt="Mysql Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Maria Database"><img src={MariaDbLogo} alt="Maria Database Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Aerospike"><img src={AerospikeLogo} alt="Aerospike Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Postgresql"><img src={PostgreSqlLogo} alt="Postgresql Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Microsoft Sql Server"><img src={MicrosoftSqlLogo} alt="Microsoft Sql Server Logo"/></span></li>
                                        </ul>
                                    </div>
                                    <div className="content">
                                        <h6>Infrastructure</h6>
                                        <ul>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Google Cloud"><img src={GoogleCloudLogo} alt="Google Cloud Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Open Stack"><img src={OpenStackLogo} alt="Open Stack Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Docker"><img src={DockerLogo} alt="Docker Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Ansible"><img src={AnsibleLogo} alt="Ansible Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Apache Cloud"><img src={ApacheLogo} alt="Apache Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Firebase"><img src={FirebaseLogo} alt="Firebase Logo"/></span></li>
                                        </ul>
                                    </div>
                                    <div className="content">
                                        <h6>Product, Project Management & Collaboration</h6>
                                        <ul>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Gitlab"><img src={GitlabLogo} alt="Gitlab Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Jira"><img src={JiraLogo} alt="Jira Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Confluence"><img src={ConfluenceLogo} alt="Confluence Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Slack"><img src={SlackLogo} alt="Slack Logo"/></span></li>
                                        </ul>
                                    </div>
                                    <div className="content">
                                        <h6>Product Design</h6>
                                        <ul>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Sketch"><img src={SketchLogo} alt="Sketch Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Principle"><img src={PrincipleLogo} alt="Principle Logo"/></span></li>
                                            <li><span data-tooltip-conf="bottom no-arrow" data-tooltip="Invision"><img src={InvisionLogo} alt="Invision Logo"/></span></li>
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
}

Technologies.PropTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    areasText: PropTypes.string,
}

export default Technologies