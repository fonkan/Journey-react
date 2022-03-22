import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {  
        //Object destructuring :: so we can remove long arguments, example: {this.props.totalCounters}
        const { counters, onReset, onDelete, onIncrement } = this.props;
 
        // <Counter /> // at the beginning
        return (
        // <React.Fragment> :: Container without node ( "<div>" works aswell )  
        <React.Fragment>
            <button 
                onClick={onReset} 
                className="btn btn-primary btn-sm m2">Reset</button>
            {counters.map( counter => 
                <Counter 
                    key={counter.id} //key react handler, not shown in 'props'
                    onDelete={onDelete} // pass a function to child vie 'props'
                    onIncrement={onIncrement}
                    counter={counter} // Send all attributes (props) to child
                >
                <h4>Counter #{counter.id}</h4>
            </Counter >) }
        </React.Fragment>
        );
    }
}
 
export default Counters;