import React from 'react';
import './Home.css';

import discord_icon_black from './images/discord_icon_black.svg';
import github_icon_black from './images/github_icon_black.svg';
import twitter_icon_black from './images/twitter_icon_black.svg';
import youtube_icon_black from './images/youtube_icon_black.svg';
import newsletter_blob_home from './images/newsletter_blob_home.svg';

function Home() {
    return (
        <section className="home">
            <section className="home-intro">
                <div className="home-social-icons">
                    <img className="youtube_icon_black" src={youtube_icon_black} />
                    <img className="twitter_icon_black" src={twitter_icon_black} />
                    <img className="github_icon_black" src={github_icon_black} />
                    <img className="discord_icon_black" src={discord_icon_black} />
                </div>
                <div className="learners-builders">
                    <b>learners</b> X builders
                </div>
                <div className="join-newsletter">
                    <img className="newsletter_blob_home" src={newsletter_blob_home} />
                    <div className="newsletter_blob_join_thefaucet"><span>Join </span><span item="newsletter_blob_theFaucetText">theFaucet</span></div>
                    <div className="newsletter_blob_info-line1">Our <b>weekly Newsletter</b></div>
                    <div className="newsletter_blob_info-line2">gives you <b>essentials</b> in <b>web3</b>.</div>
                    <div className="newsletter_blob_info-line3">with the <b>best</b> updates and <b>tips</b></div>
                    <div className="newsletter_blob_email_input"></div>
                    <div className="newsletter_blob_subscribe_button"></div>
                </div>
            </section>
            <section className="learners-builders-banner">
                <div className="home-banner-learners">
                    learners
                </div>
                <div className="home-banner-learners-list">
                    <div>theCommunities</div>
                    <div>theHodlers</div>
                    <div>theNewbies</div>
                </div>
                <div className="home-banner-x">
                    X
                </div>
                <div className="home-banner-builders">
                    builders
                </div>
                <div className="home-banner-builders-list">
                    <div>theDevelopers</div>
                    <div>theArtists</div>
                    <div>theFounders</div>
                </div>
            </section>
            <section className="home-mission">
                MISSION
            </section>
            <section className="home-plan">
                PLAN
            </section>
            <section className="home-content-reviews">
                REVIEWS
            </section>
            <section className="home-team">
                TEAM
            </section>

        </section>

    );
}

export default Home;