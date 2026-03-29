'use client';

import React from 'react';
import Link from 'next/link';

export default function AboutSection() {
    return (
        <div className="section-full p-t80 p-b80 bg-gray overflow-hide">
            <div className="container">
                <div className="section-content">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="arc-home-about-left">
                                <div className="arc-home-left-content bg-gray">
                                    <h3 className="m-t0 wt-tilte-light">Design, followed by Form & Function.</h3>
                                    <h2 className="m-t0 wt-title">Exploring the Quality Ways through Design.</h2>
                                    <p>We are uncompetitor in architectural solutions Friendly neighbour there that power.Keep away Architecture who try to Ambitions people do that really </p>
                                    <Link href="/about" className="site-button-link">Read More</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="arc-home-about-right portfolio-wrap">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 masonry-item">
                                        <div className="arc-about-year text-uppercase text-right m-b20">
                                            <div className="arc-about-year-pic">
                                                <img src="/images/about/s-1.jpg" alt="About" />
                                            </div>
                                            <div className="arc-about-year-info">
                                                <span className="title-small">working <br />experience</span>
                                                <h2 className="wt-title m-tb0">Year</h2>
                                                <span className="text-outline">12</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-6 masonry-item">
                                        <div className="wt-media m-b20 img-reflection">
                                            <img src="/images/about/l-2.jpg" alt="About" />
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-6 masonry-item">
                                        <div className="wt-media m-b20 img-reflection">
                                            <img src="/images/about/l-1.jpg" alt="About" />
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-6 masonry-item">
                                        <div className="wt-media m-b20 img-reflection">
                                            <img src="/images/about/s-3.jpg" alt="About" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
