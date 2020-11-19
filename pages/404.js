import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'

class Custom404 extends React.Component {
    render() {
        return (
            <Preloader>
                <Placeholder>
                    <div className="preloader">
                        <div className="spinner"></div>
                    </div>
                </Placeholder>
                <Header />
                <section className="error-area">
                    <div className="container">
                        <div className="error-content">
                            <img src={require('../static/images/not-found.png')}/>
                            <a className="btn btn-secondary-green" href="/">Go Back</a>
                        </div>
                    </div>
                </section>
                <Footer />
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </Preloader>
        );
    }
}
  
export default Custom404;
