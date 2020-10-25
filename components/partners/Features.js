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
                        <h3>Open source community</h3>
                        <div className="iot-features-content">
                            <p>
                            This means that no single company or person owns Fraktal. Both individuals and companies unite to bring the Fraktal mission to life and make the world a more equal and inclusive place.
                            </p>
                        </div>

                        <div className="iot-features-image">
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


        




            </React.Fragment>
        );
    }
}

export default Features;
