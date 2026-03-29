'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            {/* FOOTER START */}
            <footer className="site-footer footer-large footer-dark">
                <div className="footer-social-section bg-secondry">
                    <div className="container">
                        <div className="footer-social-content">
                            <ul>
                                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="https://x.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a></li>
                                <li><a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-pinterest-p"></i></a></li>
                                <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="https://www.behance.net" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-behance"></i></a></li>
                                <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* FOOTER BLOCKS START */}
                <div className="footer-top overlay-wraper">
                    <div className="overlay-main"></div>
                    <div className="container-fluid">
                        <div className="row">
                            {/* RECENT POST */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="widget recent-posts-entry">
                                    <h4 className="widget-title text-uppercase">Recent Post</h4>
                                    <div className="section-content">
                                        <div className="widget-post-bx">
                                            {[1, 2, 3].map((num) => (
                                                <div key={num} className="widget-post clearfix">
                                                    <div className="wt-post-media">
                                                        <img src={`/images/blog/recent-blog/pic${num}.jpg`} alt="blog post" />
                                                    </div>
                                                    <div className="wt-post-info">
                                                        <div className="wt-post-meta">
                                                            <ul>
                                                                <li className="post-author">25 Dec</li>
                                                                <li className="post-comment"> 20 Comment</li>
                                                            </ul>
                                                        </div>
                                                        <div className="wt-post-header">
                                                            <h4 className="post-title"><Link href="/blog">Planning approved for restoration town hall.</Link></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ABOUT COMPANY */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="widget widget_about">
                                    <h4 className="widget-title text-uppercase">About Information</h4>
                                    <p>Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.</p>
                                </div>

                                <div className="widget widget_newsletter">
                                    <h4 className="widget-title text-uppercase">Subscribe to our newsletter!</h4>
                                    <div className="newsletter-bx">
                                        <form role="search" method="post" onSubmit={(e) => e.preventDefault()}>
                                            <div className="input-group">
                                                <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text" />
                                                <span className="input-group-btn">
                                                    <button type="submit" className="site-button"><i className="fa-regular fa-paper-plane"></i></button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* USEFUL LINKS */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="widget widget_services inline-links">
                                    <h4 className="widget-title">Useful links</h4>
                                    <ul>
                                        <li><Link href="/about">About</Link><Link href="/blog">Articles</Link></li>
                                        <li><Link href="/projects">Gallery</Link><Link href="/services">Service</Link></li>
                                        <li><Link href="/blog">Blog</Link><Link href="/about">Our team</Link></li>
                                        <li><Link href="/projects">Portfolio</Link><Link href="/approach">Approach</Link></li>
                                        <li><Link href="/contact">Contact Us</Link><Link href="/cases">Case Studies</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* CONTACT INFO */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="widget widget_address_outer m-b20">
                                    <h4 className="widget-title">Contact Us</h4>
                                    <ul className="widget_address">
                                        <li>92 Princess Road, parkvenue,Greater London, NW18JR, United Kingdom</li>
                                        <li>thewebmaxdemo@gmail.com</li>
                                        <li>(+0091) 912-3456-073</li>
                                        <li>(+0091) 912-3456-084</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FOOTER COPYRIGHT */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-logo-bar">
                            <Link href="/"><img src="/images/logo-dark.png" alt="logo" /></Link>
                            <span className="copyrights-text">© 2026 Your Company. Designed By thewebmax.</span>
                        </div>
                    </div>
                </div>
            </footer>
            {/* FOOTER END */}

            {/* Scroll to top button - implementation left for global layout effect */}
        </>
    );
}
