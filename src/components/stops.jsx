import React, { Component } from 'react';
import '.././index.css';
class Stops extends Component {
    state = {
        stop: []
      }  
    componentDidUpdate(prevProps, prevState) {
        
    }
 
    render() {  
        const {stops, loading } = this.props;

        return (
        
        stops.map((stop, index2) => 
            <div key={("getsRemoved_"+bus[0]+"_1").toString()} work_around={react_remove_keys + '="' + (bus[0]).toString() + '_2" s="'} >
            <p>{stop[1]?stop[1]:stop[2]}</p>
            </div>
        )
        )
    };
}
 
export default Stops;