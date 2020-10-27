import React, { Component } from 'react';
import Link from 'next/link';

class Cta extends Component {
    render() {
        return (
            <section className="cta-area cta-area--fraktal-network">
                <div className="container">
                    <div className="cta-fraktal-network">
                            <div className="cta-content">
                                <h2>The Fraktal Network is powered by the staking and governance token FRAK.</h2>
                            </div>
                            <Link href="/frak">
                                <a className="btn btn-secondary-green">Learn More</a>
                            </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;
