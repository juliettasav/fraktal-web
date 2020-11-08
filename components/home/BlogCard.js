import React, { Component } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

class BlogCard extends Component {
    render() {
        return (
            <section className="iot-why-choose-us iot-why-choose-us--blog-area">
                <div className="container">
                    <div className="section-title">
                        <h2>Dive In Deeper And Learn More</h2>
                        <p>The Fraktal Ecosystem Blog is a great place to learn more about the project in greater details.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-box">
                                <div className="entry-thumbnail">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../static/images/home/8.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="entry-post-content">


                                    <h3><a href="#">Token</a></h3>
                                    <p>Learn everything about FRAK, Staking, Governance, Economics, Storage, and more.</p>

                                    <Link href="#">
                                        <a className="learn-more-btn">Read More <Icon.Plus /></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-box">
                                <div className="entry-thumbnail">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../static/images/home/9.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="entry-post-content">


                                    <h3><a href="#">Technology</a></h3>
                                    <p>Read about development progress, breaking updates, research, and technical guides.</p>

                                    <Link href="#">
                                        <a className="learn-more-btn">Read More <Icon.Plus /></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-blog-post-box">
                                <div className="entry-thumbnail">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../static/images/home/10.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="entry-post-content">


                                    <h3><a href="#">Ecosystem</a></h3>
                                    <p>Stay up to date with the latest news, partnerships, events, and educational resources.</p>

                                    <Link href="#">
                                        <a className="learn-more-btn">Read More <Icon.Plus /></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </section>
        );
    }
}

export default BlogCard;
