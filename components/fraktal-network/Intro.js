import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class Features extends Component {
    render() {
        return (
            <React.Fragment>

            <section className="iot-features-area iot-features-area--fraktal-network">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 iot-features-content">
                            <h3>The Fraktal Vision</h3>
                            <p>At Fraktal we are working towards a future where everyone has an equal opportunity to succeed. To create a world that operates in an open and transparent fashion where everyone is included.</p>

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
                    <div className="row">
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
                            <h3>Achieving our Mission</h3>
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
