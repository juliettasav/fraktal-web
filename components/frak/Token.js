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

                    <div className="row-grid three-items-grid">
                        <div className="single-box-grid mod-dark single-repair-box">
                            <div className="single-repair-box__img">
                                <img src={require('../../static/images/frak/3.png')} alt="image" />
                            </div>
                            <div className="single-repair-box__content">
                                <h3 className="mod-light">Staking</h3>
                                <p className="mod-light">The number of tokens deposited with each validator determines staking weight which influences decision making power and rewards.</p>
                            </div>
                        </div>

                        <div className="single-box-grid mod-dark single-repair-box">
                            <div className="single-repair-box__img">
                                <img src={require('../../static/images/frak/4.png')} alt="image" />
                            </div>
                            <div className="single-repair-box__content">
                                <h3 className="mod-light">Governance</h3>
                                <p className="mod-light">
                                    Each staked token equates to 1 vote on network proposals and other governance decisions which  impact the Fraktal Network
                                </p>
                            </div>
                        </div>

                        <div className="single-box-grid mod-dark single-repair-box">
                            <div className="single-repair-box__img">
                                <img src={require('../../static/images/frak/5.png')} alt="image" />
                            </div>
                            <div className="single-repair-box__content">
                                <h3 className="mod-light">Network Fees</h3>
                                <p className="mod-light">
                                    To deploy contracts and transact on the Fraktal Network fees fees are required which are paid out to the asking validators.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyChoose;
