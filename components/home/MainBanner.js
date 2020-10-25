import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';
import Typist from 'react-typist';

class MainBanner extends Component {
    render() {
        return (
            <section className="iot-main-banner">
                <div className="container">
                  <div className="flex-row main-banner-block">
                    <div className="iot-banner-content">
                        <h1>Fraktal</h1>
                        <span>The DeFi Network</span>
                        <p>Design and scale incredibly powerful DeFi apps like never before possible. </p>
                        <Link href="#">
                            <a className="btn btn-secondary-green">Learn More</a>
                        </Link>
                    </div>
                    <div className="iot-banner-img">
                        <ReactWOW delay='0.8s' animation='fadeInUp'>
                            <img
                                src={require('../../static/images/home/1.png')}
                                className="wow fadeInUp"
                                data-wow-delay="0.8s"
                                alt="image"
                            />
                        </ReactWOW>

                    </div>
                    </div>
                </div>
        </section>
        );
    }
}

export default MainBanner;
