import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'

import Architecture from '../components/fraktal-network/Architecture';
import Roadmap from '../components/fraktal-network/Roadmap';

import Intro from '../components/fraktal-network/Intro';




import Cta from '../components/fraktal-network/Cta';

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
            <Intro />
              <Architecture/>
              <Cta />
              <Roadmap />
              <Cta />
            <Footer />
            <GoTop scrollStepInPx="50" delayInMs="16.66" />
        </Preloader>
    </NoSSR>
)
}
}
