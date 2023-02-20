import React from 'react';

import logo from './images/tfbw.svg';
import discord_icon from './images/discord_icon_white.svg'
import github_icon from './images/github_icon_white.svg'
import twitter_icon from './images/twitter_icon_white.svg'
import youtube_icon from './images/youtube_icon_white.svg'

import './Footer.css';

function Footer() {
    return (
        <section className="footer">
            <section className="footer__logo-info">
                <div className="logo">
                    <img src={logo} />
                </div>
                <div className="vertical-bar"></div>
                <div className="name-contact">
                    <div>
                        the<b>Faucet Innovations</b>
                    </div>
                    <div>
                        Founders US Based
                    </div>
                    <div>
                        Contact: <a href="mailto:faucet.inquire@gmail.com">faucet.inquire@gmail.com</a>
                    </div>
                    <div>
                        Support: <a href="mailto:faucet.support@gmail.com">faucet.support@gmail.com</a>
                    </div>
                </div>
            </section>
            <section className="footer__archives-socials">
                <div className="archives">
                    the<b>Faucet Archives</b>
                </div>
                <div className="archives-button">
                    <a className="archives-button-link" href="#">Archives</a>
                </div>
                <div className="footer_socials">
                    <a href="#"><img src={discord_icon} /></a>
                    <a href="#"><img src={github_icon} /></a>
                    <a href="#"><img src={twitter_icon} /></a>
                    <a href="#"><img src={youtube_icon} /></a>
                </div>
            </section>
        </section>

    );
}

export default Footer;