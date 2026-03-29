'use client';

import React from 'react';

export default function OurStorySection() {
    const awards = [
        { year: '2016', title: 'Business Council Architectural Award - Healthcare', desc: 'Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque.' },
        { year: '2017', title: 'DBIA Western Pacific Region Project of the Year', desc: 'Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque.' },
        { year: '2018', title: 'ENR New York Higher Education Award', desc: 'Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque.' },
        { year: '2026', title: 'AIA Healthcare Design Awards', desc: 'Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque.' },
    ];

    return (
        <div className="bg-white">
            <div className="section-content">
                <div className="row awards-win-section">
                    <div className="col-lg-6 col-md-12 awards-win-section-left bg-cover bg-no-repeat bg-center bg-gray" style={{ backgroundImage: 'url(/images/background/bg-8.jpg)' }}>
                        <div className="awards-win-left-content"></div>
                    </div>
                    <div className="col-lg-6 col-md-12 awards-win-section-right bg-gray">
                        <div className="awards-win-right-content">
                            <div className="awards-win">
                                <ul>
                                    {awards.map((award, idx) => (
                                        <li key={idx}>
                                            <h2 className="title-year">{award.year}</h2>
                                            <h3 className="m-b10">{award.title}</h3>
                                            <p>{award.desc}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
