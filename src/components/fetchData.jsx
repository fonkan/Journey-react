import axios from 'axios';
import { Component, useEffect, useState } from 'react';

function FetchData() {
    const [data, setData] =  useState([]);
    const [loading, setLoading] =useState(false);
    const [error, setError] = useState(null);
    const [format, setFormat] = useState([])
    
    
  
  
    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:8080/api/journey')
        .then(response => {
            console.log(response);

            response.data.map((value, index) => {
            
                format[value[0]] = {
                    "id" : value[0],
                    "lineNumber" : value[1],

                }
            }) 
            //setData(setFormat);
            setData(response.data);
        })
        .catch(error => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        })
    },[])
    
    const refetch = () => {
        setLoading(true)
        axios.get('http://localhost:8080/api/journey')
        .then(response => {
            console.log(response);

            response.data.map((value, index) => {
            
                format[value[0]] = {
                    "id" : value[0],
                    "lineNumber" : value[1],

                }
            }) 
            //setData(setFormat);
            setData(response.data);
        })
        .catch(error => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        })
    }
    
    return (data, loading, error, refetch);


};

export default FetchData;