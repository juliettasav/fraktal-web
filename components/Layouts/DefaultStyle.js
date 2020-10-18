import React from 'react'
import { withRouter } from 'next/router';
import { connect } from 'react-redux'
import Link from '../common/ActiveLink'
import * as Icon from 'react-feather';
// import logo from '../../'

class DefaultStyleTwo extends React.Component {

    state = {
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    render(){
        let { products } = this.props;
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        let { pathname } = this.props.router;
        let layOutCls = '';
        if (pathname == '/home-three'){
            layOutCls = 'p-relative';
        }
        return (
            <header id="header" className="navbar-style-three">
                <div id="navbar" className={`startp-nav ${layOutCls}`}>
                    <div className="container--header">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a
                                    className="navbar-brand"
                                    onClick={() => window.location.refresh()}
                                >
                                    <img src={require("../../static/images/logo.png")} alt="logo" />
                                </a>
                            </Link>

                            <button
                                onClick={this.toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav nav ml-auto align-items-center">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">About <Icon.ChevronDown /></a>
                                    <ul className="dropdown_menu">
                                        <li className="nav-item">
                                            <Link activeClassName="active" href="/fraktal-network">
                                                <a className="nav-link">Fraktal Network</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link activeClassName="active" href="/frak">
                                                <a className="nav-link">FRAK</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">

                                                <a className="nav-link" activeClassName="active" href="https://medium.com/@fraktal" target="_blank">Blog</a>

                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a href="#" className="nav-link">Community <Icon.ChevronDown /></a>
                                    <ul className="dropdown_menu">
                                        <li className="nav-item">
                                            <Link activeClassName="active" href="/staking">
                                                <a className="nav-link">Staking & Governance</a>
                                            </Link>
                                        </li>


                                        <li className="nav-item">

                                                <a className="nav-link" activeClassName="active" href="https://contribute.fraktal.network" target="_blank">Contribute</a>

                                        </li>

                                        <li className="nav-item">
                                            <Link activeClassName="active" href="/partners">
                                                <a className="nav-link">Partners</a>
                                            </Link>
                                        </li>



                                        <li className="nav-item">

                                                <a className="nav-link" activeClassName="active" href="https://discord.com/invite/SqsG7zY" target="_blank">Chat</a>

                                        </li>
                                    </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/products">
                                            <a className="nav-link">Products</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Developers<Icon.ChevronDown /></a>
                                        <ul className="dropdown_menu">
                                            <li className="nav-item">

                                                    <a className="nav-link" href="https://developer.fraktal.network" target="_blank">Documentation</a>

                                            </li>

                                            <li className="nav-item">
                                                    <a className="nav-link" href="https://github.com/FraktalNetwork" target="_blank">Github</a>
                                            </li>

                                        </ul>
                                    </li>
                                    <li className="nav-item">
            
                                        <img src={require('../../static/images/language.svg')} alt="Language Icon"/>
                                            {/* <ul className="dropdown_menu">
                                                <li className="nav-item">

                                                    <a className="nav-link" href="#" target="_blank">Eng</a>

                                                </li>

                                                <li className="nav-item">
                                                        <a className="nav-link" href="#" target="_blank">Mandarian</a>
                                                </li>

                                        </ul> */}
                                    </li>
                                </ul>
                                
                            </div>
                        </nav>
                    </div>
                </div>

            </header>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.addedItems
    }
}

export default withRouter(connect(mapStateToProps)(DefaultStyleTwo))
