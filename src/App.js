//import logo from './logo.svg';
import axios from 'axios';
import FetchData from './components/fetchData';
import RestFetchJson from './components/restFetchJson';

import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  //const { data, loading, error, refetch } = FetchData();
  //if(loading)return <h1>Loading ...</h1>
  //if(error) console.log(error); 
  //<button onClick="{refetch}" />
  state = {
    formatedData: [],
    loading: true,
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

  ///////////////// START /////////////////////////////////////////////////

  // Life cycles // Mount
  componentDidMount() {
    console.log("App - Mounted");
    //Ajax calls
    
    axios.get('http://localhost:8080/api/get/journeys')
    .then(response => {
        //console.log(response);
        this.setState({ busses: response.data, loading:false });     
      
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
      console.log("loading done");
    })
    
  }

  /* async componentDidMount() {const response = await fetch('http://localhost:8080/api/journey');
    const data = await response.json();this.setState({ bus: data.result, loading:false });} //*/

  render() {
    
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        {/* <RestFetchJson sendingData={this.state.counters.filter(c => c.value > 0).length} /> */}
        <main className="container">
        {<div>
          {this.state.loading ? (
            <div ClassName="laoder">
              <img  src="https://i.gifer.com/ZZ5H.gif" />
            </div>
            ) : (
              <div><ul>works 
                {this.state.busses.map((bus, index) =>  
                    <React.Fragment>
                      <li key={index+1}>{index+1} {bus[0]} {bus[1]}</li>
                    </React.Fragment>
                 )}
              </ul></div> 
            )}
        </div>}
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





  ////////////////////// END ////////////////////////////////////////////





















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

}

export default App;
