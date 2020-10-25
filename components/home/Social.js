import React, { Component } from 'react';
import Link from 'next/link';


class AgencyCtaArea extends Component {
    hoverIcon = (condition, e) => {
        if(e.target.id === 'facebook-icon') {
            if(condition) {
                e.target.src = require('../../static/images/socials/facebookHover.svg');
            } else {
                e.target.src = require('../../static/images/socials/facebook.svg');
            }
        } else if(e.target.id === 'twitter-icon') {
            if(condition) {
                e.target.src = require('../../static/images/socials/twitterHover.svg');
            } else {
                e.target.src = require('../../static/images/socials/twitter.svg');
            }
        } else if(e.target.id === 'instagram-icon') {
            if(condition) {
                e.target.src = require('../../static/images/socials/instagramHover.svg');
            } else {
                e.target.src = require('../../static/images/socials/instagram.svg');
            }
        } else {
            if(condition) {
                e.target.src = require('../../static/images/socials/linkedinHover.svg');
            } else {
                e.target.src = require('../../static/images/socials/linkedin.svg');
            }
        }
        
    }
   
    render() {
        return (
            <div className="agency-cta-area">
                <div className="container">
                    <div className="agency-cta-content">
                        <h2>Stay in Touch</h2>
                        <div className="free-trial-content">
                            <form className="newsletter-form">
                                <input type="email" className="input-newsletter" placeholder="Your Email" />
                                <a className="btn btn-secondary-green" href="#" target="_blank">Subscribe</a>                            
                            </form>
                        </div>
                        <ul className="social-links">
                                    <li>
                                        <Link href="#">
                                            <a>
                                            <img 
                                                id="facebook-icon"
                                                src={require('../../static/images/socials/facebook.svg')}
                                                alt="Facebook Icon"
                                                onMouseEnter={(e) => this.hoverIcon(true, e)}
                                                onMouseLeave={(e) => this.hoverIcon(false, e)}
                                            />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <img 
                                                    id="twitter-icon"
                                                    src={require('../../static/images/socials/twitter.svg')}
                                                    alt="Twitter Icon"
                                                    onMouseEnter={(e) => this.hoverIcon(true, e)}
                                                    onMouseLeave={(e) => this.hoverIcon(false, e)}
                                                />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>
                                            <img 
                                                id="instagram-icon"
                                                src={require('../../static/images/socials/instagram.svg')}
                                                alt="Instagram Icon"
                                                onMouseEnter={(e) => this.hoverIcon(true, e)}
                                                onMouseLeave={(e) => this.hoverIcon(false, e)}
                                            />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>
                                            <img 
                                                id="linkedin-icon"  
                                                src={require('../../static/images/socials/linkedin.svg')}
                                                alt="linkedin Icon"
                                                onMouseEnter={(e) => this.hoverIcon(true, e)}
                                                onMouseLeave={(e) => this.hoverIcon(false, e)}
                                            />
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default AgencyCtaArea;
