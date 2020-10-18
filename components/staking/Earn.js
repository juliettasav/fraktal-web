import React, { Component } from 'react';
import Link from 'next/link';

class Cta extends Component {
    render() {
        return (
            <section className="cta-area cta-area--staking">
                <div className="container">
                    <div className="row">
                        <div className="cta-content">

                            <h2>Rewards are paid out in real time 24/7 and typically range between 7% to 12% annually.</h2>
    
                            <div className="buy-btn">
                                <Link href="#">
                                    <a className="btn btn-secondary-green">Get Started</a>
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
