import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import './Header.scss' ;


// const Header = ({ siteTitle }) => (
//   <header>
//     <div>
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

const Header = () => (
   <header>
 <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark">
        <div className="container">
          <div>
            <Link className="navbar-brand" to="/">
              <img src="/icons/logo.png" className="App-logo" alt="logo" />
            </Link>
          </div>
          <div className="menubar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/solution">
                  Solution
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/partner">
                   Partner
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/company">
                   Company
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/careers">
                Careers
                </Link>
              </li>
            </ul>
            
          </div>  
          <div className="demo">
            <div className="book-a-demo">
              <Link className="btn btn-danger book-demo" to="/bookademo">
                Book A Demo
              </Link>
            </div>   
          </div>
        </div>
      </nav>
    </div>
  </header>
      
   
    
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
