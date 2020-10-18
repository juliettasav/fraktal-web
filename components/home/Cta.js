import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class Cta extends Component {
    render() {
        return (
            <section className="iot-cta-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                        <div className="cta-iot-img">
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <img
                                    src={require('../../static/images/cta-shape2.png')}
                                    className="wow fadeInUp"
                                    data-wow-delay="0.6s"
                                    alt="image"
                                />
                            </ReactWOW>
                        </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="cta-iot-content">
                                <h2>Become a Fraktal Developer</h2>
                                <p>Develop decentalised applications in Rust, Go, and AssemblyScript (coming soon).</p>
                                <Link href="#">
                                    <a className="btn btn-secondary-green">Get Started!</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                
            </section>
        );
    }
}

export default Cta;
