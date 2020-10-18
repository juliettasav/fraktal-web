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
                                        // src={require('../../static/images/graphics/3.png')}
                                        // className="wow fadeInUp"
                                        // data-wow-delay="0.6s"
                                        // alt="image"
                                        alt="image"
                                        className="wow fadeInUp"
                                    />
                                </ReactWOW>
                            </div>
                            <div className=" iot-features-content">
                                <h3>What is Fraktal?</h3>
                                <p>Fraktal is a Blockchain Network which solves scalability and transaction costs issues present in other smart contract platforms, while still remaining open, secure, and decentralised.
                                This enables DeFi applications to scale to a global level and opens up the door to a whole new range of use cases that were never before possible.</p>

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
                            <p>DeFi (Decentralised Financial) apps give users full control over their assets, enabling investors to vastly increase their profits by no longer having to pay fees to banks, brokers, or other financial service providers.
                            It will have a larger impact on the world than any technology ever has. By rewiring how economies function and how people store, transact, and invest anything of value.</p>
                            
                        </div>

                        <div className=" iot-features-image">
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <img
                                    // src={require('../../static/images/graphics/2.png')}
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
