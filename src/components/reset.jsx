import React, { Component } from 'react';
class Reset extends Component {
    render() {
        const { triggerReset } = this.props;
        return (
        <React.Fragment>
            <button 
                onClick={triggerReset} 
                className="reset_button">Reset</button>        
        </React.Fragment>
        );
    }
}
export default Reset;