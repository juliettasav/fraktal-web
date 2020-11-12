import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class Features extends Component {
    render() {
        return (
            <React.Fragment>

            <section className="iot-features-area iot-features-area--top">
                <div className="container">
                    <div className="grid-row template-two second-intro-home-block">
                        <h3>What is Staking?</h3>
                        <div className="iot-features-content">
                            <p>
                                Staking is how the Fraktal Community secures and governs the Fraktal Network, without relying on a centralised authority.
                            </p>
                        </div>

                        <div className="iot-features-image">
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <img
                                    src={require('../../static/images/staking/1.png')}
                                    className="wow fadeInUp"
                                    data-wow-delay="0.6s"
                                    alt="image"
                                />
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </section>


            <section className="iot-features-area">
                <div className="container">
                    <div className="grid-row template-two first-intro-home-block">
                        <div className="iot-features-image">
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <img
                                    src={require('../../static/images/staking/2.png')}
                                    className="wow fadeInUp"
                                    data-wow-delay="0.6s"
                                    alt="image"
                                />
                            </ReactWOW>
                        </div>
                        <h3>Every entity needs to become a validtaor to participate</h3>
                        <div className="iot-features-content">
                            <p>
                                To become a validator you must run a full node which is a real-time copy of all the historical and current transactions on Fraktal Network and have a balance of deposited FRAK which is in the top 100.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="iot-features-area">
                <div className="container">
                    <div className="grid-row template-two second-intro-home-block">
                        <h3>Stake without becoming a validator</h3>
                        <div className="iot-features-content">
                            <p>
                                If you do not want to run your own full node and be a validator, you can delegate youor tokens to a validator. This process is fully secure and you will always remain in full control of your tokens. Validatores take a small share of your rewards in exchange for running a full node.
                            </p>
                        </div>

                        <div className="iot-features-image">
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <img
                                    src={require('../../static/images/staking/3.png')}
                                    className="wow fadeInUp"
                                    data-wow-delay="0.6s"
                                    alt="image"
                                />
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </section>




            </React.Fragment>
        );
    }
}

export default Features;
