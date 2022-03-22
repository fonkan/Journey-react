//import logo from './logo.svg';
import React, { Component } from 'react';
import RestFetchJson from './components/restFetchJson';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {

  state = {
    counters: [
        { id: 1, value: 5 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
        { id: 5, value: 0 }
    ]
  }
  // Life cycles // Mount
  constructor() {
    super();
    console.log("App - Constructor");
  }
  // Life cycles // Mount
  componentDidMount() {
    console.log("App - Mounted");
    //Ajax calls
    //this.setState({ movies });
  }

  handleIncrement = counter => {
    console.log("handleIncrement");
                    //Spred operator ( ... ) to clone state   
    const counters = [...this.state.counters];
    // const isn't constant??? hmm...
  
    // This can now manipulate state??? This is a no no in react!!!
    const index = counters.indexOf(counter);
    
    // To break direkt referens we give value again by clone operating
    counters[index] = {...counter};
  
    counters[index].value++; 
    this.setState({ counters });
  
    // Original fetch should not be changed
    //console.log(counter);
  }

  handleReset = () => {
    console.log("handleReset");
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({ counters });
  }
  handleDelete = (counterId) => {
    console.log("delete: ", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  }
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <RestFetchJson sendingData={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />  
        </main>
        
      </React.Fragment>
    
    );
  }
}

export default App;
