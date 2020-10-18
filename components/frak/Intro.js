import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class Features extends Component {
    render() {
        return (
            <React.Fragment>

            <section className="iot-features-area iot-features-area--frak">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 iot-features-content">
                            <h3>The Fraktal Network Token (FRAK)</h3>
                            <p>FRAK is the native token of the Fraktal Network of Blockchains. What is unique is that this one token is used to validate an infinite number of parallel chains.</p>

                        </div>

                        <div className="col-lg-6 iot-features-image">
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <img
                                    src={require('../../static/images/graphics/3.png')}
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
                    <div className="row ">
                        <div className="col-lg-6 iot-features-image">
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <img
                                    src={require('../../static/images/graphics/2.png')}
                                    className="wow fadeInUp"
                                    data-wow-delay="0.6s"
                                    alt="image"
                                />
                            </ReactWOW>
                        </div>

                        <div className="col-lg-6 iot-features-content">
                            <h3>Inflationary → Deflationary</h3>
                            <p>The Fraktal Network will begin as an inflationary network with a targeted inflation rate of 7.5% annually. In the Fraktal-4 release validator fees will no longer be from inflation and will transition to network fees. The exact amount can be dynamically changed via on-chain governance to decide the correct allocation between the Community Fund, Burning, and Validator Rewards. </p>




                        </div>
                    </div>
                </div>
            </section>


            




            </React.Fragment>
        );
    }
}

export default Features;
