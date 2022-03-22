import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';

function fetchData(url) {
    const [data, setData] =  useState([]);
    const [loading, setLoading] =useState(false);
    const [error, setError] = useState(null);



    useEffect(()=>{
        setLoading(true)
        useEffect(() => {
            axios.get('http://localhost:8080/api/journey')
            .then(response => {
                console.log(response);
                setData(response.data);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })
        })
    },[url])
    return (data, loading, error);


};

export default fetchData;