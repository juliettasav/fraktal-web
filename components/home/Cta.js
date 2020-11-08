import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class Cta extends Component {
    render() {
        return (
            <section className="iot-cta-area iot-cta-area--home">
                <div className="grid-row">
                <div className="cta-iot-img">
                    <ReactWOW delay='0.8s' animation='fadeInUp'>
                        <img
                            src={require('../../static/images/home/7.png')}
                            className="wow fadeInUp"
                            data-wow-delay="0.8s"
                            alt="image"
                        />
                    </ReactWOW>
                </div>
                    <h2>Become a Fraktal Developer</h2>
                    <p>Contribute to Fraktal network or build your own powerful decentralised applications.</p>
                    
                    <a className="btn btn-secondary-green" href="https://developer.fraktal.network/" target="_blank">Get Started!</a>
                </div>
            </section>
        );
    }
}

export default Cta;
