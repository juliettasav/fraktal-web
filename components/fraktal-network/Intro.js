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
                        <h3>The Fraktal </h3>
                        <div className="iot-features-content">
                            <p>At Fraktal we are working towards a future where everyone has an equal opportunity to succeed. To create a world that operates in an open and transparent fashion where everyone is included.</p>

                        </div>

                        <div className="iot-features-image">
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <img
                                    src={require('../../static/images/network/1.png')}
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
                                    src={require('../../static/images/network/2.png')}
                                    className="wow fadeInUp"
                                    data-wow-delay="0.6s"
                                    alt="image"
                                />
                            </ReactWOW>
                        </div>
                        <h3>Achieving our Mission</h3>
                        <div className="iot-features-content">
                            <p>We achieve our mission by creating an environment where everyone who is passionate about enacting change can effectively work together to produce cutting edge technology and deliver it to those who can benefit from it the most.</p>

                        </div>
                    </div>
                </div>
            </section>




            </React.Fragment>
        );
    }
}

export default Features;
