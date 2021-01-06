import React from 'react';

import '../contact.css'

const contact = () => {
    return (
        <div>
            <section id="contact">
                
                <h1 class="section-header">CONTACT</h1>
                
                <div class="contact-wrapper">
                    
                    <form class="form-horizontal" role="form" method="post" action="contact.php">
                    
                    <div class="form-group">
                        <div class="col-sm-12">
                            <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value=""/>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-12">
                        <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value=""/>
                        </div>
                    </div>

                    <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message"></textarea>
                    
                    <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                        <div class="button">
                            <span class="send-text">SEND</span>
                        </div>
                    
                    </button>
                    
                    </form>
                    
                    
                    <div class="direct-contact-container">

                        <ul class="contact-list">
                            <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Somewhere, USA</span></i></li>
                            
                            <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-234-567-8901" title="Give me a call">(234) 567-8901</a></span></i></li>
                            
                            <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">emailme@gmail.com</a></span></i></li>
                        
                        </ul>

                        <hr/>
                        <ul class="social-media-list">
                            <li><a href="#" target="_blank" class="contact-icon">
                                <i class="fa fa-github" aria-hidden="true"></i></a>
                            </li>
                            </ul>
                        <hr/>

                    </div>
                    
                </div>
                
                </section>  
        </div>
    );
};

export default contact;