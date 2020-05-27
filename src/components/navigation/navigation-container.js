import React from 'react'
import { withRouter } from 'react-router'
import { NavLink } from "react-router-dom"

const NavigationComponent = props => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink to={route} activeClassName="nav-link-active">
                    {linkText}
                </NavLink>
            </div>
        )
    }
  
        return (
            <div className="nav-wrapper">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Home
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/counter" activeClassName="nav-link-active">
                        Counter
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/toggle" activeClassName="nav-link-active">
                        Toggle
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/font-sizer" activeClassName="nav-link-active">
                        Font Sizer
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/align" activeClassName="nav-link-active">
                        Align
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/show-hide" activeClassName="nav-link-active">
                        Show Hide
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/clock" activeClassName="nav-link-active">
                        Clock
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/change-color" activeClassName="nav-link-active">
                        Change Color
                    </NavLink>
                </div>
            </div>
        )
    }



export default withRouter(NavigationComponent);