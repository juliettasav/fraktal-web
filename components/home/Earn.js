import React, { Component } from 'react';
import Link from 'next/link';

class Cta extends Component {
    render() {
        return (
            <section className="earn-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="earn-area__content">
                                <h2>Earn FRAK by Contributing to Growth and Completing Tasks!</h2>
                                <a className="btn btn-secondary-green" href="https://contribute.fraktal.network" target="_blank">EARN Today</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="earn-area__circle"></div>
                <div className="earn-area__text">10M FRAK available</div>
            </section>
        );
    }
}

export default Cta;
