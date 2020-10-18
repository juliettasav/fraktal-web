import React, { Component } from 'react';
import Link from 'next/link';

class AgencyCtaArea extends Component {
    render() {
        return (
            <div className="agency-cta-area ptb-80">
                <div className="container">
                    <div className="agency-cta-content">
                        <h2>Follow Us</h2>

                        <Link href="#">
                            <a className="btn btn-gradient">Contact Us</a>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="free-trial-content">
                          

                            <form className="newsletter-form">
                                <input type="email" className="input-newsletter" placeholder="Enter your business email here" />
                                <button type="submit">Sign Up Free</button>
                            </form>

                            <p>Test out the Machine Learning features for 14 days, no credit card required.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AgencyCtaArea;
