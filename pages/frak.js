import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'



import Intro from '../components/frak/Intro';
import Token from '../components/frak/Token';
import Economics from '../components/frak/Economics';
import Earn from '../components/home/Earn';

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
            <Economics />
            <Token />
            <Earn />
            <Footer />
            <GoTop scrollStepInPx="50" delayInMs="16.66" />
        </Preloader>
    </NoSSR>
)
}
}
