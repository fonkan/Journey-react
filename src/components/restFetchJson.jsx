import React, { Component, useEffect, useState } from 'react';


 
// Stateless functional component :: instead of a class
// Cannot return lifecycle hooks in stateless function :: can only return an output
const RestFetchJson = (props) => {
    const [data, setData] =  useState([]);
    const getData=()=>{
 
        fetch('http://localhost:8080/api/journey', {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            } 
        })
        .then(
            function(response){
                console.log(response);
                return response.json();
            })
        .then(
            function (myJson) {
                console.log(myJson);
                setData(myJson)
            }
        );
    } 
    useEffect(()=>{
        getData()
    },[])
    return (
        <nav className="restFetchJson restFetchJson-light bg-light">
            restFetchJson{" "}
        <p>
        {console.log(data)}
        <span className="aClass">
                {props.sendingData}    
        </span>
        </p>
        </nav>
    );
};

export default RestFetchJson;