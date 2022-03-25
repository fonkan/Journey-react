
import React, { Component, useEffect, useState } from 'react';
class Navbar extends Component {
    render() { 
        const { totalCounters } = this.props;
  
        return (
            <div className='header'>
                <div>
                    <h1>SL Teklab</h1>
                    <span>sampling data</span>
                </div>
            <nav className="navbar">
                <div>
                <a className="navbar-link" href="#">
                    Navbar{" "}
                    <span>
                        {totalCounters}    
                    </span>
                </a>
                </div>
            </nav>
            </div>
        );
    }
}

export default Navbar;