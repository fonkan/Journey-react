import React, { Component } from 'react';
class Counter extends Component {
    // Remove state for a controlled component and 
    // referens to parent "() => {doStuff()}" see further down
    state = {
        value: this.props.counter.value, // inherit from <Counter /> in Counters.jsx
        imageUrl: 'https://picsum.photos/300',
        tags: ['tag1','tag2','tag3']
    };  

    // Referens for non returning Methods to get 'this'
    //constructor() {
    //    super(); // Specifies as 'base constructor'
    //    this.handleClickMethod = this.handleClickMethod.bind(this); 
    //}

    //// Does not return needs constructor to inherit 'this'
    //handleClickMethod() {  //onClick={ this.handleClickMethod }
    //    console.log("executes onload if specified as returning method, if specified as non return method it does not inherit 'this'");
    //    console.log("to inherit 'this' we need to 'bind' it from a constructor", this);
    //}

    //// ArrowFunctions can pass arguments and also has access to 'this'
    //handleClickMethod = () => { //onClick={ this.handleClickMethod }
    //    this.setState({ count: this.state.count + 1 });
    //}

    // ArrowFunctions with argument
    handleClickMethod = product => { // onClick={() => this.handleClickMethod(this.state)}
        console.log(product);
        this.setState({ value: this.state.value + 1 });
    }
    // Passing argument middle hand if to set arguments manually outside render
    //doHandleClickMethod = () => { // onClick={this.doHandleClickMethod} 
    //  this.handleClickMethod({ id: 1 });
    //}  

    // functions that returns, inherit 'this'.
    renderTags() { // { this.renderTags() }
        if(this.state.tags.length === 0) return <p>Empty array</p> ;
        return <ul key={this.props.id}>{ this.state.tags.map(tag => <li key={ tag }>{ tag }</li>) }</ul>;
    }
    // Custom attributes
    inlineStyles = {
        fontSize: '20px'
    };
    // Life cycles // Update
    componentDidUpdate(prevProps, prevState) {
        //console.log("prevProps", prevProps);
        //console.log("prevState", prevState);
        if(prevProps.counter.value !== this.props.counter.value){
            // Ajax call and get new data from the server.
        }
    }

    // Life cycles // Unmount // Executes before object is deleted
    componentWillUnmount() {
        console.log("Counter - Unmount");
    }

    render() { 
        //let myClasses = this.getActiveNode();
        let myClasses = "inlineClass";
            myClasses += (this.state.value === 0) ? "-invalid" : "-active";

        return (
            <div >
                {this.props.children}
                { true && "Wierd return of last statemen in js 'if' statement"}
                { this.renderTags() }
                {2 + 2}<br />

                <div className={myClasses} key={this.props.id}>
                    <span 
                        style={this.inlineStyles} 
                        className={ this.getActiveNode() +" "+ myClasses }> {this.formatCount()}</span>
                    <button 
                        //onClick={ () => this.handleClickMethod({ id: 1 }) } // Referes to self :: state
                        onClick={ () => this.props.onIncrement( this.props.counter )} // referes to parent with function
                        style={{border:'1px solid red'}} 
                        className="btn btn-secondary btn-sm">Increment</button>
                </div>
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-secondary btn-sm">
                Delete</button>
                <br /><img src={this.state.imageUrl} alt="" />
            </div>
        );
    }
    getActiveNode() {
        let classes = "methodClass";
        classes += (this.props.counter.value === 0) ? "-invalid" : "-active";
        return classes;
    }
    // Method example
    formatCount() {
        const { value: count } = this.props.counter; // old this.state;
        // JSX expression (able to return htmlentities)
        return count === 0 ? <span>Zero</span> : count ;        
    }
}
 
export default Counter;