import React from 'react';
import './OurMission.css';
import mission_textBubble_connector from '../images/our_mission_connector_cord_black.svg';

function OurMission() {
    return (
        <section className="home-mission">
            <div className="home-mission-title">
                
                    <span>Our <span id="home-mission-Mission">Mission</span></span>
                    <hr id="home-mission-ourMission-hr" />
                
            </div>

            <div className="home-mission-connectedTextBubbles">
                <img className="home-mission_textBubble_connector" src={mission_textBubble_connector} />
                <div className="home-mission-connectedTextBubbles-left">
                    <p id="home-mission-bubble-left">
                        Lorem ipsum dolor sit amet consectetur. In fermentum commodo tortor sed scelerisque urna volutpat risus pellentesque. Adipiscing ac amet et massa elit eu. Massa ornare sem nibh eget lectus ac faucibus. Odio posuere a risus a felis amet donec. Arcu suspendisse dignissim est facilisi. Ultrices at morbi libero non. Risus massa suspendisse habitant metus morbi sem.
                        Turpis lacus volutpat in a dignissim. Dictum morbi at pretium sed erat potenti morbi vestibulum volutpat. A posuere adipiscing habitant tellus. Et lorem.
                    </p>
                </div>
                <div className="home-mission-connectedTextBubbles-right">
                    <p id="home-mission-bubble-right">
                        Lorem ipsum dolor sit amet consectetur. In fermentum commodo tortor sed scelerisque urna volutpat risus pellentesque. Adipiscing ac amet et massa elit eu. Massa ornare sem nibh eget lectus ac faucibus. Odio posuere a risus a felis amet donec. Arcu suspendisse dignissim est facilisi. Ultrices at morbi libero non. Risus massa suspendisse habitant metus morbi sem.
                        Turpis lacus volutpat in a dignissim. Dictum morbi at pretium sed erat potenti morbi vestibulum volutpat. A posuere adipiscing habitant tellus. Et lorem.
                    </p>
                </div>
                
                    
            </div>
            <hr id="home-mission-bottom-hr" />




        </section>
    );
}

export default OurMission;