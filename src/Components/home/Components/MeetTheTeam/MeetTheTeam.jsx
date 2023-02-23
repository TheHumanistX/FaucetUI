import React from 'react';

import './MeetTheTeam.css';

import twitter_icon_white from '../images/twitter-icon-white.svg';
import meet_team_blue_blob_1 from '../images/meet-team-blue-blob-1.svg';
import meet_team_blue_blob_2 from '../images/meet-team-blue-blob-2.svg';
import meet_team_blue_blob_3 from '../images/meet-team-blue-blob-3.svg';

function MeetTheTeam() {
    return (
        <section className="home-team">
            <div className="home-team-title">

                <span>Meet <span id="home-team-Team,">The Team</span></span>
                <hr id="home-team-ourTeam-hr" />

            </div>
            <div className="home-team-flex-row">
                <div className="home-team-flex-row-blacksquare">
                    <span>Our&nbsp;<span id="home-team-blacksquare-background">Background</span></span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Pretium cursus vulputate vitae dictumst etiam nulla aenean. Ornare gravida risus habitant sagittis. Lectus sem egestas venenatis lectus cursus massa malesuada pharetra massa. A lacus scelerisque purus phasellus mauris sapien.
                        Neque quis vulputate ut faucibus tempus nunc scelerisque scelerisque arcu. Risus orci sit scelerisque orci. Tortor egestas eget facilisi eu ornare in adipiscing. Semper gravida maecenas id consectetur odio nunc sem ut vulputate. Sit magna ultrices fringilla in et suscipit porta ut.
                        Rutrum in odio mauris nunc lectus et pulvinar massa turpis. Tristique nisl posuere auctor nunc. Faucibus nibh in diam at laoreet adipiscing sit. Tellus augue ac eu et euismod semper sed. Leo tortor pellentesque nisl senectus in orci id odio. Duis ullamcorper a pellentesque scelerisque arcu eget non. Aliquam cras donec adipiscing mauris semper nunc elementum varius pulvinar. Massa phasellus eu nibh ultricies mauris in interdum felis.
                        Consequat odio eget quisque lectus. Dapibus vitae vitae nec vitae scelerisque semper vitae quisque quam. Sit mauris volutpat phasellus nunc velit. Ut mattis id mattis elit lectus aliquam et. Ultricies odio sed mi leo tempus. Aliquam leo pretium semper sed risus ultrices
                    </p>
                </div>
                <div className="home-team-flex-row-vertline">

                </div>
                <div className="home-team-flex-column">
                    <div className="home-team-blue-blob-1">
                        <img className="home-team-blue-blobs" id="home-team-blue-blob-1" src={meet_team_blue_blob_1} />
                        <div className="home-team-blob-1-thehumanist">
                            <span>the<span id="home-team-blob-1-thehumanist">Humanist</span></span>
                        </div>
                        <div className="home-team-blob-1-info">
                            <p>
                            Lorem ipsum dolor sit amet consectetur. Turpis donec velit elementum eros quis iaculis arcu. Libero sed tortor faucibus blandit aliquam mi. Amet accumsan ornare.
                            </p>
                        </div>
                        <div className="home-team-blob-1-twitter">
                            <img id="home-team-blob-1-twitter" src={twitter_icon_white} />
                        </div>
                    </div>
                    <div className="home-team-blue-blob-2">
                        <img className="home-team-blue-blobs" id="home-team-blue-blob-2" src={meet_team_blue_blob_2} />
                        <div className="home-team-blob-2-0x3atWave">
                            <span><span id="home-team-blob-2-0x3atWave">0x3at | Wave</span></span>
                        </div>
                        <div className="home-team-blob-2-info">
                            <p>
                            Lorem ipsum dolor sit amet consectetur. Turpis donec velit elementum eros quis iaculis arcu. Libero sed tortor faucibus blandit aliquam mi. Amet accumsan ornare.
                            </p>
                        </div>
                        <div className="home-team-blob-2-twitter">
                            <img id="home-team-blob-2-twitter" src={twitter_icon_white} />
                        </div>
                    </div>
                    <div className="home-team-blue-blob-3">
                        <img className="home-team-blue-blobs" id="home-team-blue-blob-3" src={meet_team_blue_blob_3} />
                        <div className="home-team-blob-3-unclelu">
                            <span><span id="home-team-blob-3-unclelu">UncleLu</span></span>
                        </div>
                        <div className="home-team-blob-3-info">
                            <p>
                            Lorem ipsum dolor sit amet consectetur. Turpis donec velit elementum eros quis iaculis arcu. Libero sed tortor faucibus blandit aliquam mi. Amet accumsan ornare.
                            </p>
                        </div>
                        <div className="home-team-blob-3-twitter">
                            <img id="home-team-blob-3-twitter" src={twitter_icon_white} />
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default MeetTheTeam;