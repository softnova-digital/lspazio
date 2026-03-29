'use client';

import React from 'react';
import Link from 'next/link';

export default function ServicesSection() {
    const services = [
        { id: 'A', title: 'Architecture design', icon: 'flaticon-mansion' },
        { id: 'S', title: 'smart Interior design', icon: 'flaticon-stair' },
        { id: 'R', title: 'Residential design', icon: 'flaticon-apartment' },
        { id: 'L', title: 'landscape design', icon: 'flaticon-photo' },
        { id: 'P', title: 'Plans and Projects', icon: 'flaticon-sketch' },
        { id: 'K', title: 'Kitchen design', icon: 'flaticon-kitchen' },
    ];

    return (
        <div className="section-full p-t80 p-b50 bg-gray">
            <div className="container">
                <div className="section-head clearfix">
                    <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
                        <small className="wt-small-title">Work service</small>
                        <h2 className="m-b5">Our great provided</h2>
                    </div>
                    <div className="title-right-detail">
                        <p>We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture who try to Ambitions people do that really great.</p>
                    </div>
                </div>
                <div className="row">
                    {services.map((service, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                            <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large v-icon-effect block-bg-hover bg-white" data-title={service.id}>
                                <div className="icon-content m-b30">
                                    <h3 className="wt-tilte-large m-t0" data-title={service.id}>{service.title}</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and type.</p>
                                    <Link href="/services" className="site-button-link">Read More</Link>
                                </div>
                                <div className="icon-xl inline-icon">
                                    <span className="icon-cell"><i className={`${service.icon} v-icon`}></i></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
