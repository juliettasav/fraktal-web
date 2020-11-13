import React, { Component } from 'react';

class WhyChoose extends Component {
    render() {
        return (
            <section className="iot-why-choose-us iot-why-choose-us--gov">
                <div className="container">
                    <div className="section-title">
                        <h2>FRAK Economic Layer </h2>
                        <p>Since Fraktal is community governed, participation is highly important for project success.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-box">
                                <div className="single-repair-box__img">
                                    <img src={require('../../static/images/staking/4.png')} />
                                </div>
                                <div className="single-repair-box__content">
                                    <h3>Stake FRAK</h3>
                                    <p>Each token equates to 1 vote</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-box">
                            <div className="single-repair-box__img">
                                    <img src={require('../../static/images/staking/5.png')} />
                                </div>
                                <div className="single-repair-box__content">
                                    <h3>Propose</h3>
                                    <p>Anyone is eligible to issue <br /> proposals</p>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-box">
                                <div className="single-repair-box__img">
                                        <img src={require('../../static/images/staking/6.png')} />
                                    </div>
                                    <div className="single-repair-box__content">
                                        <h3>Vote</h3>
                                        <p>Vote Text</p>
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
