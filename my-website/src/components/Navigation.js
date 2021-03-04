import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Collapse from 'react-bootstrap/Collapse'

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
  const [open, setOpen] = useState(false)
  
  return(
            <nav className="navbar-expand-sm navbar navbar-dark bg-dark fixed-top">
              <a className="navbar-brand" href="/">HG</a>
              <button onClick={() => setOpen(!open)} className="navbar-toggler" type="button" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={open} aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <Collapse in={open}>
                <div className="collapse navbar-collapse flex-grow-1 text-right" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto text-center flex-nowrap">

                      <NavItem path="/" name="Home" />
                      <NavItem path="/page2" name="About" />
                      <NavItem path="/page3" name="Projects" />
                      <NavItem path="/page4" name="Resume" />
                      
                    </ul>
                  </div>

              </Collapse>   
            </nav>
  )
}

export default Navigation;