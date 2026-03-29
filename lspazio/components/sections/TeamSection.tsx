'use client';

import React from 'react';

export default function TeamSection() {
    const team = [
        { name: 'Taminm Alows', position: 'Architect', img: '/images/our-team1/pic1.jpg' },
        { name: 'Michael Evens', position: 'Architect', img: '/images/our-team1/pic2.jpg' },
        { name: 'Pamela Smith', position: 'Architect', img: '/images/our-team1/pic3.jpg' }
    ];

    return (
        <div className="section-full p-t80 p-b50 bg-white our-team-two">
            <div className="container">
                <div className="section-head clearfix">
                    <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
                        <small className="wt-small-title">Our Experts</small>
                        <h2 className="m-b5">Our Best Team</h2>
                    </div>
                    <div className="title-right-detail">
                        <p>We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture who try to Ambitions people do that really great.</p>
                    </div>
                </div>

                <div className="section-content">
                    <div className="row justify-content-center">
                        {team.map((member, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 col-sm-12">
                                <div className="wt-team-arc2">
                                    <div className="wt-media">
                                        <img src={member.img} alt={member.name} />
                                        <div className="team-social-center">
                                            <ul className="team-social-icon">
                                                <li><a href="https://www.pinterest.com" className="fa-brands fa-pinterest-p" target="_blank" rel="noreferrer"></a></li>
                                                <li><a href="https://web.whatsapp.com" className="fa-brands fa-whatsapp" target="_blank" rel="noreferrer"></a></li>
                                                <li><a href="https://www.facebook.com" className="fa-brands fa-facebook-f" target="_blank" rel="noreferrer"></a></li>
                                                <li><a href="https://x.com" className="fa-brands fa-x-twitter" target="_blank" rel="noreferrer"></a></li>
                                                <li><a href="https://www.linkedin.com" className="fa-brands fa-linkedin-in" target="_blank" rel="noreferrer"></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="wt-info bg-white p-a30">
                                        <div className="team-detail text-center">
                                            <h3 className="m-t0">{member.name}</h3>
                                            <p>{member.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
