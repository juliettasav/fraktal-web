import React, { Component } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

class WhyChoose extends Component {
    render() {
        return (
            <section className="iot-why-choose-us">
                <div className="container">
                    <div className="section-title">
                        <h2>Fraktal Leads DeFi</h2>
                        <p>Every aspect of Fraktal is designed with DeFi in mind. </p>
                        <img src={require('../../static/images/logo-white.png')}/>
                    </div>
                    

                    <div className="row-grid why-choose-grid">
                        <div className="single-features">
                            <div className="single-features-img">
                            </div>
                            <div className="single-features__content">
                                <h3>Infinitely Scalable</h3>
                                <p>An unlimited amount of parallel chains can be deployed under 1 validator set to handle any magnitude of scale. This ensures transaction fees remain low without speed being affected.</p>
                            </div>
                        </div>

                        <div className="single-features">
                            <div className="single-features-img">
                            
                            </div>
                            <div className="single-features__content">
                                <h3>DeFi Optimised UX</h3>
                                <p>The user experience of the Fraktal Network is designed for DeFi with near-instant transaction finality.</p>
                            </div>
                        </div>

                        <div className="single-features">
                            <div className="single-features-img">
                            
                            </div>
                            <div className="single-features__content">
                                <h3>Low Fees</h3>
                                <p>Low transation fees create an inclusive environment where everyone can participate, and opens the door to a whole new range of Defi and Micropayment use cases which were never before possible.</p>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyChoose;
