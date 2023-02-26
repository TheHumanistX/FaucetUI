import React from 'react';

import './Home.css';
import { HomeIntro, HomeIntro2, LearnersBuildersBanner, OurMission, OurPlan, ContentReviews, MeetTheTeam } from './Components';

function Home() {
    
    return (
        
        <section className="home">
            <HomeIntro />
            <LearnersBuildersBanner />
            <OurMission />
            <OurPlan />
            <ContentReviews />
            <MeetTheTeam />

        </section>

    );
}

export default Home;