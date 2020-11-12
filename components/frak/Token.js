import React, { Component } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

class WhyChoose extends Component {
    render() {
        return (
            <section className="repair-why-choose-us">
                <div className="container">
                    <div className="section-title">
                        <h2>FRAK <span className="mobile-text">Economic Layer</span></h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-box">
                                <div className="single-repair-box__img">
                                    <img src={require('../../static/images/frak/3.png')} alt="image" />
                                </div>
                                <div className="single-repair-box__content">
                                    <h3>Staking</h3>
                                    <p>The number of tokens deposited with each validator determines staking weight which influences decision making power and rewards.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-box">
                                <div className="single-repair-box__img">
                                    <img src={require('../../static/images/frak/4.png')} alt="image" />
                                </div>
                                <div className="single-repair-box__content">
                                    <h3>Governance</h3>
                                    <p>
                                        Each staked token equates to 1 vote on network proposals and other governance decisions which  impact the Fraktal Network
                                    </p>
                                </div>
                                
                                
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-repair-box">
                                <div className="single-repair-box__img">
                                    <img src={require('../../static/images/frak/5.png')} alt="image" />
                                </div>
                                <div className="single-repair-box__content">
                                    <h3>Network Fees</h3>
                                    <p>
                                        To deploy contracts and transact on the Fraktal Network fees fees are required which are paid out to the asking validators.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyChoose;
