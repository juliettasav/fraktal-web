import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'
import MainBanner from '../components/home/MainBanner';
import Intro from '../components/home/Intro';
import WhyChoose from '../components/home/WhyChoose';

import Partner from '../components/home/Partner';

import Cta from '../components/home/Cta';
import Funfacts from '../components/home/Funfacts';

import Team from '../components/home/Team';
import Feedback from '../components/home/Feedback';


import Social from '../components/home/Social';
import Earn from '../components/home/Earn';
import BlogCard from '../components/home/BlogCard';

export default class Index extends React.Component {
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

            <MainBanner />
            <Intro />
            <WhyChoose />
              <Partner />
            <Cta />
              <Funfacts />
              <Earn />
              <BlogCard />
            <Social />
            <Footer />
            <GoTop scrollStepInPx="50" delayInMs="16.66" />
        </Preloader>
    </NoSSR>
)
}
}
