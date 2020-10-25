import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel3';

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
            <section className="iot-partner-area iot-partner-area--home">
                <div className="container">

                    <h2>Fraktal Works with</h2>
                    <p>
                        Fraktal directly integrates with all other Comsos Ecosystem by default, giving Fraktal powered DeFi aoos unlimited potential to disrupt the financial world. 
                    </p>

                    <div className="row">
                        <OwlCarousel
                            className="repair-partner-slides owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="single-repair-partner">
                                    <a href="#">
                                        <img src={require('../../static/images/partner-img/bandprotocol.png')} alt="image" />
                                        <img src={require('../../static/images/partner-img/bandprotocol.png')} alt="image" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-repair-partner">
                                    <a href="#">
                                        <img src={require('../../static/images/partner-img/cosmos.png')} alt="image" />
                                        <img src={require('../../static/images/partner-img/cosmos.png')} alt="image" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-repair-partner">
                                    <a href="#">
                                        <img src={require('../../static/images/partner-img/kava.png')} alt="image" />
                                        <img src={require('../../static/images/partner-img/kava.png')} alt="image" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-repair-partner">
                                    <a href="#">
                                        <img src={require('../../static/images/partner-img/enigma.png')} alt="image" />
                                        <img src={require('../../static/images/partner-img/enigma.png')} alt="image" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-repair-partner">
                                    <a href="#">
                                        <img src={require('../../static/images/partner-img/binanceusd.png')} alt="image" />
                                        <img src={require('../../static/images/partner-img/binanceusd.png')} alt="image" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-repair-partner">
                                    <a href="#">
                                        <img src={require('../../static/images/partner-img/partner-6.png')} alt="image" />
                                        <img src={require('../../static/images/partner-img/partner-hover6.png')} alt="image" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-repair-partner">
                                    <a href="#">
                                        <img src={require('../../static/images/partner-img/partner-7.png')} alt="image" />
                                        <img src={require('../../static/images/partner-img/partner-hover7.png')} alt="image" />
                                    </a>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        );
    }
}

export default Partner;
