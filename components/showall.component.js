import React from 'react';

export default class ShowAll extends React.Component{

    constructor(){
        super();

        this.state={
            employees: []
        }
    }
    componentDidMount = () => {
    fetch("http://localhost:6060/showAll")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        this.setState({
            employees: data
        }, () => {console.log(this.state); })
    })
    }
    render(){
        return(
            <div>Show All Page>
                <table>
            <tbody>
                <tr>
                    <td> EmpNo         </td>
                    <td> Name          </td>
                    <td> Address         </td>
                </tr>
                {
                    this.state.employees.map( data=>
                    <tr>
                        <td> {data.empno} </td>
                        <td> {data.name} </td>
                        <td> {data.address} </td>
                    </tr>
                    )}
                </tbody>
                </table>

            </div>
        )}
            }
