import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

import '../contact.css'
init("user_zYbmT4Wbs5YyKM730JPUb");

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: ""
        }
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //TODO make sure no fields are empty
        emailjs.send("service_pohw0jg","template_juveuam",
        {
            from_name: this.state.name,
            message: this.state.message,
            reply_to: this.state.email,
            }).then((result) => {
                alert("Email sent")
            }, (error) => {
                alert("Error encountered, email not sent")
            });
            
        this.setState({
            name: "",
            email: "",
            message: ""
        }) 
    }

    render() {
        return (
            <div>
            <section id="contact">
                
                <h1 className="section-header">CONTACT</h1>
                
                <div className="contact-wrapper">
                    
                    <form className="form-horizontal" onSubmit={this.handleSubmit} >
                    
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control" id="name" placeholder="NAME" name="name" value={this.state.name} onChange={this.handleChange}/>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-12">
                            <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" onChange={this.handleChange}/>
                            </div>
                        </div>

                        <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" onChange={this.handleChange}></textarea>
                        
                        <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                            <div className="button">
                                <span className="send-text">SEND</span>
                            </div>
                        </button>
                    
                    </form>
                    
                    
                    <div className="direct-contact-container">

                        <ul className="contact-list">
                            <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Somewhere, USA</span></i></li>
                            
                            <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-234-567-8901" title="Give me a call">(234) 567-8901</a></span></i></li>
                            
                            <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">emailme@gmail.com</a></span></i></li>
                        
                        </ul>

                        <hr/>

                    </div>
                    
                </div>
                
                </section>  
        </div>
        );
    }
}

export default Contact;