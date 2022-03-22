import React, { Component, useEffect, useState } from 'react';


class NavBar extends Component {
    render() { 
        const { totalCounters } = this.props;
 
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar{" "}
                    <span className="aClass">
                        {totalCounters}    
                    </span>
                </a>
                </div>
            </nav>
        );
    }
}
/*
// Stateless functional component :: instead of a class
const NavBar = (props) => {
    return (
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
            Navbar{" "}
            <span className="aClass">
                {props.totalCounters}    
            </span>
        </a>
    </nav>
    );
};
//*/
export default NavBar;