import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


const NavItem = props => {
    const pageURI = window.location.pathname+window.location.search
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
    return (
      <li className={liClassName}>
        <a href={props.path} className={aClassName}>
          {props.name}
          {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
        </a>
      </li>
    );
}

function Navigation() {
  return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">HG</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                    <NavItem path="/" name="Home" />
                    <NavItem path="/page2" name="About" />
                    <NavItem path="/page2" name="Projects" />
                    <NavItem path="/page3" name="Resume" />
    
                </ul>
            </div>
        </nav>
  )
}

export default Navigation;