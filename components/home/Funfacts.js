import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Odometer = dynamic(import('react-odometerjs'),{
    ssr: false,
    loading: () => 0
});

class Funfacts extends React.Component {

    state = {
        download: 0,
        feedback: 0,
        worker: 0,
        contributor: 0
    };

    componentDidMount(){
        this.setState({
            download: 240,
            feedback: 56,
            worker: 114,
            contributor: 2
        });
    }

    render(){
        const { download, feedback, worker, contributor } = this.state;
        return (
            <section className="iot-why-choose-us iot-why-choose-us--funfacts-area">
                <div className="container">
                    <div className="section-title">
                        <h2>Join the Fraktal Community!</h2>
                        <p>Meet amazing people and start disrupting! No matter where you are located, if you are a developer, marketer, designer, activist or just want to hang out</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>
                                    <Odometer format="d" duration={500} value={download} />
                                </h3>
                                <p>Native <br /> Applications</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>
                                    <Odometer format="d" duration="500" value={feedback} />
                                </h3>
                                <p>Partner <br/> Integrations</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>
                                    <Odometer format="d" duration="500" value={worker} />
                                </h3>
                                <p>Users</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>
                                    <Odometer format="d" duration="500" value={contributor} />M
                                </h3>
                                <p>TVL</p>
                            </div>
                        </div>
                    </div>

                    

                    
                </div>
            </section>
        )
    }
}

export default Funfacts
