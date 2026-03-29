'use client';

import React from 'react';
import Link from 'next/link';

export default function PartnerSection() {
    const partners = [
        '/images/client-logo/w1.png',
        '/images/client-logo/w2.png',
        '/images/client-logo/w3.png',
        '/images/client-logo/w4.png',
        '/images/client-logo/w5.png',
        '/images/client-logo/w6.png',
        '/images/client-logo/w1.png',
        '/images/client-logo/w2.png'
    ];

    return (
        <div className="section-full p-t80 p-b50 bg-white">
            <div className="container">
                <div className="section-content client-logo">
                    <div className="row justify-content-center">
                        {partners.map((logo, idx) => (
                            <div key={idx} className="col-6 col-sm-4 col-md-3">
                                <Link href="#" className="wt-img-effect client-logo-media shadow">
                                    <img src={logo} alt={`Client logo ${idx}`} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
