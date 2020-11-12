import React, { Component } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather'

class Services extends Component {
    render() {
        return (
          <section className="products-info-area">
            <div className="container">
                <div className="section-title">
                <h2>Products</h2>
                </div>
                <div className="row-grid why-choose-grid">
                        <div className="single-features partners-box-container">
                            <div className="single-features-img partners-box">
                            <img src={require('../../static/images/products/2.png')}/>
                            </div>
                            <div className="single-features__content">
                                <h3>Fraktal Network</h3>
                                <p>An open financial system that enables anyone to build financial apps without relying on banking infrastructure.</p>
                            </div>
                        </div>

                        <div className="single-features partners-box-container">
                            <div className="single-features-img partners-box">
                            <img src={require('../../static/images/products/3.png')}/>
                            </div>
                            <div className="single-features__content">
                                <h3>Fraktal TestNet</h3>
                                <p>Fraktal TestNetwork for Developers, learning, and trying new things.</p>
                            </div>
                        </div>

                        <div className="single-features partners-box-container">
                            <div className="single-features-img partners-box">
                            <img src={require('../../static/images/products/4.png')}/>
                            </div>
                            <div className="single-features__content">
                                <h3>Gabel.io</h3>
                                <p>Your own personal bank. Safely store your assets and send money instantly, anywhere in the world without bank fees.</p>
                            </div>
                        </div>
                        <div className="single-features partners-box-container">
                            <div className="single-features-img partners-box">
                            <img src={require('../../static/images/products/5.png')}/>
                            </div>
                            <div className="single-features__content">
                                <h3>FraktalScan by TokenWeb</h3>
                                <p>A Block Explorer designed for multi-chain networks powered by IBC.</p>
                            </div>
                        </div>
                        <div className="single-features partners-box-container">
                            <div className="single-features-img partners-box">
                            <img src={require('../../static/images/products/6.png')}/>
                            </div>
                            <div className="single-features__content">
                                <h3>FrakIt</h3>
                                <p>A simplified interface for tokenising and managing assets across the Fraktal Network.</p>
                            </div>
                        </div>
                        {/* <div className="single-features">
                            <div className="single-features-img">
                            
                            </div>
                            <div className="single-features__content">
                                <h3>Enigma</h3>
                                <p>Each staked token equates to 1 vote on network proposals and other governance decisions which impact the Fraktal Network</p>
                            </div>
                        </div> */}

                    
                    </div>
                
                     


            </div>
          </section>
        );
    }
}

export default Services;
