import React, { Component } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

class WhyChoose extends Component {
    render() {
        return (
            <section className="iot-why-choose-us iot-why-choose-us--leads-defi">
                <div className="container">
                    <div className="section-title">
                        <h2>Fraktal Leads DeFi</h2>
                        <p>Every aspect of fractal is designed with DeFi in mind</p>
                        <img className="whyus-logo" src={require('../../static/images/logo-white.png')}/>
                    </div>
                    

                    <div className="row-grid why-choose-grid">
                        <div className="single-features">
                            <div className="single-features-img">
                                <img src={require('../../static/images/home/4.png')}/>
                            </div>
                            <div className="single-features__content">
                                <h3>Infinitely Scalable</h3>
                                <p>
                                    Each Fraktal based chain can handle 10,000 transactions per second and an infinite number of chains can run in parallel, making Fraktal the most scalable and powerful Blockchain to exist.
                                </p>
                            </div>
                        </div>

                        <div className="single-features">
                            <div className="single-features-img">
                                <img src={require('../../static/images/home/5.png')}/>
                            </div>
                            <div className="single-features__content">
                                <h3>DeFi Optimised UX</h3>
                                <p>
                                    From low transaction fees, zk-snarks, to near-instant transaction finality, every aspect of Fraktal is designed  with DeFi in mind.
                                </p>
                            </div>
                        </div>

                        <div className="single-features">
                            <div className="single-features-img">
                                <img src={require('../../static/images/home/6.png')}/>
                            </div>
                            <div className="single-features__content">
                                <h3>Low Fees</h3>
                                <p>
                                    Tap into hundreds of billions of dollars of untapped liquidity across different Blockchains such as BTC, ETH, USDT, BNB, XRP, ATOM, and DOT
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
