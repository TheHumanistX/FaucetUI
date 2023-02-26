import React from 'react';
import { useState } from 'react';
import './HomeIntro.css';

import discord_icon_black from '../images/discord_icon_black.svg';
import github_icon_black from '../images/github_icon_black.svg';
import twitter_icon_black from '../images/twitter_icon_black.svg';
import youtube_icon_black from '../images/youtube_icon_black.svg';
import newsletter_blob_home from '../images/newsletter_blob_home.svg';

function HomeIntro () {
    const [emailAddress, setEmailAddress] = useState("");
    return(
        <section className="homeIntro">
            <div className="home-social-icons">
                    <a href="#"><img className="youtube_icon_black" src={youtube_icon_black} /></a>
                    <a href="#"><img className="twitter_icon_black" src={twitter_icon_black} /></a>
                    <a href="#"><img className="github_icon_black" src={github_icon_black} /></a>
                    <a href="#"><img className="discord_icon_black" src={discord_icon_black} /></a>
                </div>
                <div className="learners-builders">
                    <p><span className="home-learnersBuilders-learners">learners </span><span>X builders</span></p>
                </div>
                <div className="join-newsletter">
                    <img className="newsletter_blob_home" src={newsletter_blob_home} />
                    <div className="newsletter_blob_join_thefaucet join_thefaucetText">
                        <p>
                            <span id="newsletter_blob_jointext">Join </span><span className="home-spanText-bold">theFaucet</span>
                        </p>
                    </div>
                    <div className="newsletter_blob_info join_thefaucetText">
                        <p>
                            Our <span className="home-spanText-bold">weekly Newsletter</span><br />
                            gives you <span className="home-spanText-bold">essentials</span> in <span className="home-spanText-bold">web3</span>,<br />
                            with the <span className="home-spanText-bold">best</span> updates and <span className="home-spanText-bold">tips</span>
                        </p>
                    </div>
                    
                    <div className="newsletter_blob_email_input join_thefaucetText">
                        <form>
                            <input
                                className="homepage-newsletter-email-input"
                                type="email"
                                value={emailAddress}
                                onChange={(e) => setEmailAddress(e.target.value)}
                            />
                            <button
                                className="homepage-newsletter-email-submit"
                                type="submit"
                                value="Subscribe"
                            >SUBSCRIBE</button>
                        </form>
                    </div>
                    <div className="newsletter_blob_subscribe_button  join_thefaucetText">

                    </div>
                </div>
        </section>
    );
}

export default HomeIntro;