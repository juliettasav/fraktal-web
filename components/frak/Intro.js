import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class Features extends Component {
    render() {
        return (
            <React.Fragment>

            <section className="iot-features-area iot-features-area--top">
                <div className="container">
                    <div className="grid-row template-two second-intro-home-block">
                        <h3>The Fraktal Network Token</h3>
                        <div className="iot-features-content">
                            <p>FRAK is the native token of the Fraktal Network of Blockchains. What is unique is that this one token is used to validate an infinite number of parallel chains.</p>

                        </div>

                        <div className="iot-features-image">
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <img
                                    src={require('../../static/images/frak/1.png')}
                                    className="wow fadeInUp"
                                    data-wow-delay="0.6s"
                                    alt="image"
                                    style={{objectPosition: '0px 0px'}}
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
                                    src={require('../../static/images/frak/2.png')}
                                    className="wow fadeInUp"
                                    data-wow-delay="0.6s"
                                    alt="image"
                                    
                                />
                            </ReactWOW>
                        </div>
                        <h3>Inflationary - Deflationary</h3>
                        <div className="iot-features-content">
                            <p>
                                The Fraktal Network will begin as an inflationary network with a targeted inflation rate of 7.5% annually. <div className="text-mobile">In the Fraktal-4 release, validator fees will no longer be from inflation and will trransistion to the network fees. The exact amount can be dynamically changed via  on-chain governance to decide the correct allocation between the Community Fund, Burning, and Validator Rewards.</div>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            </React.Fragment>
        );
    }
}

export default Features;
