import React, { Component } from 'react';

class login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            name: "",
            email: "",
            password: ""
        })
        
        fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
               // "email": this.state.email, 
                password: this.state.password
            })
        })
        .then(data => {
            return data.json()
        })
        .then(result => {
            this.props.setSession(result)
            window.location.reload() //TODO this is temporary fix. needs to update state/props instead
        })
    }

    render() {
        // TODO Sign up
        //TODO Logout
        return (
            <div className="page-content">
                <div className="page-content homepage">
                    <h1>Please Log In</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <p>Username</p>
                            <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
                        </label>
                        <label>
                            <p>Password</p>
                            <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                        </label>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

export default login;