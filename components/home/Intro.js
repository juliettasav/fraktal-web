import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class Features extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="iot-features-area">
                    <div className="container">
                        <div className="row row-grid intro-grid">

                            <div className=" iot-features-image">
                                <ReactWOW delay='0.6s' animation='fadeInUp'>
                                    <img
                                        src={require('../../static/images/home/2.png')}
                                        className="wow fadeInUp"
                                        data-wow-delay="0.6s"
                                        alt="image"
                                        alt="image"
                                        className="wow fadeInUp"
                                    />
                                </ReactWOW>
                            </div>
                            <div className=" iot-features-content">
                                <h3>What is Fraktal?</h3>
                                <p>
                                    Fraktal solves Blockchain scalability and privacy while remaining secure and decentralised. This enables countless new use cases for high frequency, low value transactions which have never before been possible.
                                </p>

                                <Link href="#">
                                    <a className="btn btn-secondary-green">Explore More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            <section className="iot-features-area">
                <div className="container">
                    <div className="row row-grid intro-grid">
                        
                        <div className="iot-features-content">
                            <h3>What is DeFi?</h3>
                            <p>
                                DeFi (Decentralised Finance) is a new era of finance powered by blockchain technology. It will have a larger impact on the world than any technology ever has by creating a secure environment for people to conduct trustless transactions.
                            </p>
                            
                        </div>

                        <div className="iot-features-image">
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <img
                                    src={require('../../static/images/home/3.png')}
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
