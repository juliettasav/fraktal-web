import React, { Component } from 'react';
import * as Icons from 'react-feather';

class Features extends Component {
    render() {
        return (
            <section className="hosting-features-area">
                <div className="container">
                    <div className="section-title">
                        <h2>Meet The Members Of The Fraktal Community</h2>                      
                    </div>

                    <div className="row-grid three-items-grid">
                        <div className="single-box-grid mod-dark single-features">
                            <div className="single-features-img partners-box">
                                <img src={require('../../static/images/partners/2.png')}/>
                            </div>
                            <div className="single-features__content">
                                <h3>Band Protocol</h3>
                                <p>
                                Each staked token equates to 1 vote on network proposals and other governance decisions which  impact the Fraktal Network
                                </p>
                            </div>
                        </div>

                        <div className="single-box-grid mod-dark single-features">
                            <div className="single-features-img partners-box">
                            <img src={require('../../static/images/partners/3.png')}/>
                            </div>
                            <div className="single-features__content">
                                <h3>TokenWeb</h3>
                                <p>Each staked token equates to 1 vote on network proposals and other governance decisions which impact the Fraktal Network</p>
                            </div>
                        </div>

                        <div className="single-box-grid mod-dark single-features">
                            <div className="single-features-img partners-box">
                                <img src={require('../../static/images/partners/4.png')}/>
                            </div>
                            <div className="single-features__content">
                                <h3>Cosmos</h3>
                                <p>
                                Each staked token equates to 1 vote on network proposals and other governance decisions which impact the Fraktal Network
                                </p>
                            </div>
                        </div>
                        <div className="single-box-grid mod-dark single-features">
                            <div className="single-features-img partners-box">
                            <img src={require('../../static/images/partners/5.png')}/>

                            </div>
                            <div className="single-features__content">
                                <h3>Tendermint</h3>
                                <p>Each staked token equates to 1 vote on network proposals and other governance decisions which impact the Fraktal Network</p>
                            </div>
                        </div>
                        <div className="single-box-grid mod-dark single-features">
                            <div className="single-features-img partners-box">
                            <img src={require('../../static/images/partners/6.png')}/>

                            </div>
                            <div className="single-features__content">
                                <h3>Kava</h3>
                                <p>
                                Each staked token equates to 1 vote on network proposals and other governance decisions which  impact the Fraktal Network
                                </p>
                            </div>
                        </div>
                        <div className="single-box-grid mod-dark single-features">
                            <div className="single-features-img partners-box">
                            <img src={require('../../static/images/partners/7.png')}/>

                            </div>
                            <div className="single-features__content">
                                <h3>Enigma</h3>
                                <p>Each staked token equates to 1 vote on network proposals and other governance decisions which impact the Fraktal Network</p>
                            </div>
                        </div>

                    
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;
