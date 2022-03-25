import React, { Component } from 'react';
import axios from 'axios';
import '.././index.css';
class Busses extends Component {
    state = {
        toggleClose:false,
        toggleId: 0,
        selected: 0,
        formatedData: [],
        loading: false,
        stop: []
      }  
    componentDidUpdate(prevProps, prevState) {
        
    }
 
    render() {  
        const { busses, loading } = this.props;
        var react_remove_keys = '" key';
        var cleaner;
        return (
        <React.Fragment>
        <div>
             {

             loading ? (
                  <div className="laoder">
                    <p>Loading...</p>
                  </div>
              ) : ( 
                  <div className="list_object"> 
                { busses.map((bus, index) =>  
                      <React.Fragment>   
                        <div onClick={
                          this.handleClickEvents = () => {

                            if(this.state.toggleId && this.state.toggleId != this.state.toggleClose){
                              this.setState({toggleClose: this.state.toggleId});
                            }else this.setState({toggleClose: 0});

                            this.setState({toggleId: (index+1)});

                            {axios.get('http://localhost:8080/api/get/stops?line_number='+bus[0])
                            .then(response => {
                                this.setState({ stops: response.data });
                            })
                            .catch(error => {
                                console.log(error);
                            })
                            .finally(() => {
                              console.log("stops loaded...");
                            })} 
                              console.log(bus[0]);
                          }} name={index} key={("getsRemoved_"+bus[0]).toString()} work_around={react_remove_keys + '="' + (bus[0]).toString() + '" s="'} >
                          
                          <div><p><span>{(index+1)}</span>: <span>Buslinje: </span><strong>{bus[0]}</strong> Antal stop på linjen: <strong>{bus[1]}</strong></p></div>

                              { bus[0] && this.state.stops?(
                                  <div className={this.state.toggleClose==(index+1) || this.state.toggleId!=(index+1)?("element hide_element"):("element show_element")} >
        

                                   {this.state.stops.map((stop, index2) =>  
                                   (cleaner != (stop[1]?stop[1]:stop[2]) && (stop[1]?stop[1]:stop[2]))?(
                                    <React.Fragment> 
                                      <div key={("getsRemoved_"+bus[0]+"_1").toString()} work_around={react_remove_keys + '="' + (bus[0]).toString() + '_2" s="'} >
                                        
                                        <p>{cleaner = stop[1]?stop[1]:stop[2]}</p>
                                        
                                      </div>
                                      
                                    </React.Fragment> 
                                    
                                   ):(
                                    <React.Fragment></React.Fragment>
                                   )
                                   )}
                                    </div>
                                ) : (
                                  <div></div>
                                )}
                        </div>
                      </React.Fragment>
                  )}
                </div> 
              )
          }
        </div>
        </React.Fragment>
        );
    }
}
 
export default Busses;