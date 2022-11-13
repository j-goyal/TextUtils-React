import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'dark' ? 'dark' : 'light'} bg-${props.mode === 'dark' ? 'dark' : 'light'}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link home active" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link about" to="/About">{props.aboutText}</Link>
                        </li> */}

                    </ul>
                    <div className={`me-3 custom-control custom-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`} id="greenModeDiv" >
                        <input className="custom-control-input me-1" aria-checked="false" onChange={props.toggleGreenMode} type="radio" id="greenMode" />
                        <label className="custom-control-label" htmlFor="flexSwitchCheckDefault">Green Mode</label>
                    </div>
                    <div className={`me-3 custom-control custom-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`} id="redModeDiv" >
                        <input className="custom-control-input me-1" aria-checked="false" onChange={props.toggleRedMode} type="radio" id="redMode" />
                        <label className="custom-control-label" htmlFor="flexSwitchCheckDefault">Red Mode</label>
                    </div>
                    <div className={`me-3 custom-control custom-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`} id="blueModeDiv">
                        <input className="custom-control-input me-1" aria-checked="false" onChange={props.toggleBlueMode} type="radio" id="blueMode" />
                        <label className="custom-control-label" htmlFor="flexSwitchCheckDefault">Blue Mode</label>
                    </div>
                    <div className={`custom-control custom-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`} id="lightModeDiv">
                        <input className="custom-control-input me-1" aria-checked="false" onChange={props.toggleLightMode} type="radio" id="lightMode" />
                        <label className="custom-control-label" htmlFor="flexSwitchCheckDefault">Light Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}


Navbar.defaultProps = {
    title: "DefaultTitle",
    aboutText: "DefaultAbout"
}