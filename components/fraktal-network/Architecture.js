import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import ReactWOW from 'react-wow';

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    responsive: {
        0:{
            items:2,
        },
        768:{
            items:4,
        },
        1200:{
            items:6,
        }
    }
}


class Partner extends Component {
    render() {
        return (
            <section className="iot-why-choose-us iot-why-choose-us--architecture">
                <div className="container">

                <div className="section-title">
                    <h2>Fraktal Network Architecture</h2>
                    <p>
                        The Fraktal Network is a Proof-of-Stake Blockchain powered by the Tendermint Consensus Engine and developed with CosmosSDK. It extends smart contract functionality and developer tooling through the integration of the CosmWasm Virtual Machine.
                    </p>


                </div>
                    <div className="lg-image-box">
                        <ReactWOW delay='0.6s' animation='fadeInUp'>
                            <img
                                src={require('../../static/images/network/3.png')}
                                className="wow fadeInUp"
                                data-wow-delay="0.6s"
                                alt="image"
                            />
                        </ReactWOW>
                    </div>
                </div>
            </section>
        );
    }
}

export default Partner;
