import React, { Component, useEffect, useState } from 'react';


export default class FetchBusData extends React.Component {

    state = {
        loading: true
    }
    async componentDidMount() {
        const foo = await fetch('http://localhost:8080/api/journey');
    }
    render () {
        return (
        <div>
            {this.state.loading ? <div>loading...</div> : <div>.. bus data ..</div>}
        </div>
    );
    }
}