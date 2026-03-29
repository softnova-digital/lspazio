import React from 'react';
import Link from 'next/link';

interface InnerBannerProps {
    title: string;
    paths: { name: string; url?: string }[];
}

export default function InnerBanner({ title, paths }: InnerBannerProps) {
    return (
        <div className="wt-bnr-inr overlay-wraper bg-center bg-cover" style={{ backgroundImage: 'url(/images/banner/1.jpg)' }}>
            <div className="overlay-main bg-black opacity-06"></div>
            <div className="container">
                <div className="wt-bnr-inr-entry text-center">
                    <div className="banner-title-outer">
                        <div className="banner-title-name">
                            <h2 className="text-white text-uppercase" style={{ fontFamily: '"Oswald", sans-serif', letterSpacing: '5px' }}>{title}</h2>
                        </div>
                    </div>
                    <div>
                        <ul className="wt-breadcrumb breadcrumb-style-2">
                            {paths.map((path, index) => (
                                <li key={index}>
                                    {path.url ? <Link href={path.url}>{path.name}</Link> : path.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
