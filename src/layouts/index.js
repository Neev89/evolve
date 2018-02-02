import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'

import '../assets/sass/app.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Evolve Pvt Ltd"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div className="site">
        <Header />
        <main className="main-content">
            {children()}
        </main>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
