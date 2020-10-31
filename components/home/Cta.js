import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class Cta extends Component {
    render() {
        return (
            <section className="iot-cta-area iot-cta-area--home">
                <div className="flex-row">
                    <div className="cta-iot-content">
                        <h2>Become a Fraktal Developer</h2>
                        <p>Contribute to Fraktal network or build your own powerful decentralised applications.</p>
                        
                        <a className="btn btn-secondary-green" href="https://developer.fraktal.network/" target="_blank">Get Started!</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;
