import React, { Component, useEffect, useState } from 'react';
import { NavItem } from 'react-bootstrap';

/*
            headers : {
                'Content-Type': 'text/plain',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
*/
 
// Stateless functional component :: instead of a class
const RestFetchJson = (props) => {
    const [data, setData] =  useState([]);
    const getData=()=>{
        // ./components/files/bus_routes.json
        // http://localhost:8080/api/v1/student
        // Axion ?? 
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
/*
        <span>
        {
            data && data.length>0 && data.map(<a href="?">item.about</a>)
        } 
        </span>

//*/
export default RestFetchJson;