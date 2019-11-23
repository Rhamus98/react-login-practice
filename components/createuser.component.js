import React from 'react';
import Form from 'react-bootstrap/Form';

export default class CreateUser extends React.Component{

    constructor(){
        super();

        this.state={
            username:"",
            password:"",
            name:"",
            role:""
        }
    }
    createuser = (e) => {
        e.preventDefault();
        console.log(document.getElementById("username").value)
        this.setState({
            username:document.getElementById("username").value,
            password:document.getElementById("password").value,
            name:document.getElementById("name").value,
            role:parseInt(document.getElementById("role").value)

        }, () => {
            let data = {
                "username":this.state.username,
                "password":this.state.password,
                "name":this.state.name,
                "role":this.state.role
            }
            fetch(`http://localhost:6060/insertusers`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (response.status === 200) {
                        console.log('User Created');
                        window.location.replace(`http://localhost:3000/login`);
                    } else {
                        alert('User failed to create');
                    };
                })
            
            console.log(this.state)
            
        
        })
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="m-2">Create User Page</h1>
                        <div>
                            <Form onSubmit={this.createuser}>
                                <Form.Group controlId="formUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="input" id="username" placeholder="Enter Username" />
                                </Form.Group>

                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="input" id="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="input" id="name" placeholder="Name" />
                                </Form.Group>
                                <Form.Group controlId="role">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control as="select">
                                    <option value="1"> Admin</option>
                                    <option value="2"> User</option>
                                    </Form.Control>
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
/* <form onSubmit={this.createuser}> 
        <h2>Create User:</h2>
        Username
        <input  type="text" id="username" name="username"/>
        <br/>
        Password
        <input type="password" id="password" name="password"/>
        <br/>
        Name
        <input type="text" id="name" name="name"/>
        <br/>
        <div>
        Role
       <select name="role" id="role">
           <option value="1"> Admin</option>
           <option value="2"> User</option>
       </select>
    </div>
       <br/>
        <input type="submit" name="submit"/>
        <br/>

    </form>        ) */

}
}