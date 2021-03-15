import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { Button } from 'rsuite';
import HomeHeader from './headers/HomeHeader';
import heroImage from '../img/image 2.png'
import '../styles/home.css';

function Home() {

    const history = useHistory();

    const redirectToSignUp = () => {
        history.push('/signup')
    }

    return (
        <div>
            <header>
                <HomeHeader />
            </header>
            <section className="hero-section">
                <div className="hero-writeup">
                    <h3>Team Management software</h3>
                    <p>Commnuicate easily with teammates</p>
                    <p>Privately, securely</p>
                    <p>bhbbw niwduwd niwduwhd niuwhduw</p>
                    <div className="home-btn">
                        <Button className="primary-btn" onClick={redirectToSignUp}>GET STARTED</Button>
                    </div>
                </div>
                <div className="hero-img">
                    <img src={heroImage} alt="hero"/>
                </div>
            </section>
        </div>
    )
}

export default Home;