import axios from 'axios';
import React, { Component } from 'react';
import NavBar from './components/navbar';
import Busses from './components/busses';
import Reset from './components/reset';
import './index.css';

class App extends Component {

  state = {
    loading: true,
    busses: []
  }
  // Life cycles // Constructor
  constructor() {
    super();
  }

  // Life cycles // Mount
  componentDidMount() {
    axios.get('http://localhost:8080/api/get/journeys')
    .then(response => {
        this.setState({ busses: response.data, loading:false });
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
      console.log("loading done");
    })
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
        {<div>
              <div>
                 {/* <Reset triggerReset={this.triggerReset} /> */}
                 <Busses 
                         busses={this.state.busses}
                         
                         loading={this.state.loading}
                />
                </div> 
        </div>}
        </main>
      </React.Fragment>
    );
  }

  triggerReset = (props) => {
    console.log("Manual Reset");
    /*componentDidMount() {
      axios.get('http://localhost:8080/api/get/journeys/refresh')
      .then(response => {
          this.setState({ updateRoutes: response.data });
      })
      .catch(error => {
          console.log(error);
      })
      .finally(() => {
        console.log("loading done...");
      }) */
    
  }

}

export default App;
