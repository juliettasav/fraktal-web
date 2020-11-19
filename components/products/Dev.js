import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';


class Cta extends Component {
    render() {
        return (
            <section className="repair-cta-area">
                <div className="container">
                    <div className="grid-row product-block template-two">
                        <div className="cta-repair-img">
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <img src={require('../../static/images/products/1.png')} alt="image" />
                            </ReactWOW>
                        </div>
                        <h3>Want to build your own product?</h3>
                        <div className="cta-repair-content">
                            <p>Explore our documentation and develop any complexity DeFi app in Rust, Go, or AssemblyScript (coming soon).</p>
                            <Link href="#">
                                <a className="btn btn-secondary-green">Get Started!</a>
                            </Link>
                        </div>
                        
                    </div>
                </div>


            </section>
        );
    }
}

export default Cta;
