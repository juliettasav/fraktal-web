import React, { Component } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather'

class Services extends Component {
    render() {
        return (
          <section className="contact-info-area ptb-80">
              <div className="container">
              <div className="section-title ptb-80">

                  <h2>Products</h2>
                  <div className="bar"></div>

              </div>
                  <div className="row">
                      <div className="col-lg-4 col-md-6">
                          <div className="contact-info-box">
                              <div className="icon">
                                  <Icon.Mail />
                              </div>
                              <h3>Fraktal Network</h3>
                              <p>

                                    An open financial system that enables anyone to build financial apps without relying on banking infrastructure.

                              </p>

                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                          <div className="contact-info-box">
                              <div className="icon">
                                  <Icon.Mail />
                              </div>
                              <h3>Fraktal TestNet</h3>
                              <p>

                                  Fraktal TestNetwork for Developers, learning, and trying new things.

                              </p>

                          </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                          <div className="contact-info-box">
                              <div className="icon">
                                  <Icon.Mail />
                              </div>
                              <h3>Gabel.io</h3>
                              <p>

                                Your own personal bank. Safely store your assets and send money instantly, anywhere in the world without bank fees.

                              </p>

                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-4 col-md-6">
                          <div className="contact-info-box">
                              <div className="icon">
                                  <Icon.Mail />
                              </div>
                              <h3>FraktalScan by TokenWeb</h3>
                              <p>

                                  A Block Explorer designed for multi-chain networks powered by IBC.

                              </p>

                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                          <div className="contact-info-box">
                              <div className="icon">
                                  <Icon.Mail />
                              </div>
                              <h3>FrakIt</h3>
                              <p>

                                A simplified interface for tokenising and managing assets across the Fraktal Network.

                              </p>

                          </div>
                      </div>


                  </div>
              </div>
          </section>
        );
    }
}

export default Services;
