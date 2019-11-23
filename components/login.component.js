import React from 'react';
import Form from 'react-bootstrap/Form';

export default class Login extends React.Component {

    constructor() {
        super();

        this.state = {
            employees: []
        }
    }
    
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="m-2">Login Page</h1>
                    <div>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="input" placeholder="Username" />
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <button className="btn btn-primary" type="submit">
                                Submit
                </button>
                        </Form><br />
                    </div>
                </div>
            </div>
        </div>
                )
            }
                    
}