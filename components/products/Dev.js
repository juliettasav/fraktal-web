import React, { Component } from 'react';
import Link from 'next/link';

class Cta extends Component {
    render() {
        return (
            <section className="repair-cta-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="cta-repair-img">
                                <img src={require('../../static/images/man-and-women.png')} alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="cta-repair-content">
                                <h3>Want to build your own product?</h3>
                                <p>Explore our documentation and develop any complexity DeFi app in Rust, Go, or AssemblyScript (coming soon).</p>
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
