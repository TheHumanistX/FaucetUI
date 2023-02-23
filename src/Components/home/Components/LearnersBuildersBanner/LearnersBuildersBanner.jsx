import React from 'react';
import './LearnersBuildersBanner.css';

function LearnersBuildersBanner () {
    return(
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
    );
}

export default LearnersBuildersBanner;