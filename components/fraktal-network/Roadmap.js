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
            <section className="iot-partner-area iot-partner-area--roadmap">
                <div className="container">

                <div className="section-title">
                    <h2>Roadmap</h2>
                </div>
                    <div className="lg-image-box">
                        <ReactWOW delay='0.6s' animation='fadeInUp'>
                            <img
                                src={require('../../static/images/network/4.png')}
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
