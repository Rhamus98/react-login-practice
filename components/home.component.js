import React from 'react';
import Button from 'react-bootstrap/Button';

export default class Home extends React.Component{

    constructor(){
        super();

        this.state={
            employees: []
        }
    }
    render(){
        return(
            <div>
                <h1>Home Page</h1>   
            </div>
           
        )
    }

}