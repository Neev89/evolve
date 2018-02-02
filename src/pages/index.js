import React from 'react'

import HeroBanner from '../components/Herobanner'
import Whatwedo from '../components/Whatwedo'
import Hiring from '../components/Hiring'
import Contact from '../components/Contact'
import Technologies from "../components/Technologies/index";

const IndexPage = () => (
    <div className="main-content__inner">
        <HeroBanner/>
        <Whatwedo/>
        <Technologies/>
        <Hiring/>
        <Contact/>
    </div>
);

export default IndexPage

// export const pageQuery = graphql`
//   query IndexQuery {
//     allDataJson {
// 	  edges {
// 	    node {
// 	      frontPage {
// 	        heroTitle
//             whatWeDo {
//               description
//               linkText {
//                 text
//               }
//             }
//           }
//         }
// 	  }
// 	}
//   }
// `;