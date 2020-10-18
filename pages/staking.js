import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'

    

import Features from '../components/staking/Features';
import Earn from '../components/staking/Earn';
import Gov from '../components/staking/Gov';
import Social from '../components/home/Social';






export default class FraktalNetwork extends React.Component {
    render() {
        return (
    <NoSSR>
        <Preloader>
            <Placeholder>
                <div className="preloader">
                    <div className="spinner"></div>
                </div>
            </Placeholder>
            <Header />

            <Features />
            <Earn />
            <Gov />
            <Social />

            <Footer />
            <GoTop scrollStepInPx="50" delayInMs="16.66" />
        </Preloader>
    </NoSSR>
)
}
}
