import React from 'react'
import Link from 'next/link'

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row-grid-footer">

                        <div className="row-grid-footer__item">
                            <div className="single-footer-widget">
                            <div className="logo">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../static/images/footer/logo-footer.svg")} alt="logo" />
                                    </a>
                                </Link>
                            </div>
                            <p></p>
                            <p>
                                Fraktal is on a mission to enable DeFI to scale globally and transform the world.
                            </p>
                            </div>
                        </div>
                    
                        
                        <div className="row-grid-footer__item">
                            <div className="single-footer-widget single-footer-widget--nav">
                                <h3>Ecosystem</h3>
                                <ul className="list">
                                    <li>
                                        <Link href="/about">
                                            <a>Fraktal Network</a>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/services">
                                            <a>Staking</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/features">
                                            <a>Partners</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing">
                                            <a>Products</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <a>Contribute</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="single-footer-widget--nav single-footer-widget">
                                <h3>Developers</h3>
                                <ul className="list">
                                    <li>
                                        <Link href="/faq">
                                            <a>Documentation</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Github</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>APIs</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Security</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Chat</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="single-footer-widget single-footer-widget--nav ">
                                <h3>Resources</h3>
                                <ul className="list">
                                    <li>
                                        <Link href="/faq">
                                            <a>Blog</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Events</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Block Explorers</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Web Wallet</a>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>


                    
                    <div className="copyright-area">
                        <span className="copyright-area--black">Copyright 2020</span>
                        <span>Infinite Chain Foundation</span>
                    </div>
                    

                </div>

            </footer>
        )
    }
}
