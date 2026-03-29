'use client';

import React from 'react';
import Link from 'next/link';

export default function BlogSection() {
    const blogs = [
        { date: '25', month: 'Aug 2026', author: 'Admin', comments: 5, title: 'Never mess with a Man', text: 'There are many variations of passages of Lorem Ipsum available.' },
        { date: '30', month: 'Aug 2026', author: 'Admin', comments: 5, title: 'Never mess with a Man', text: 'There are many variations of passages of Lorem Ipsum available.' },
        { date: '05', month: 'Sep 2026', author: 'Admin', comments: 5, title: 'Never mess with a Man', text: 'There are many variations of passages of Lorem Ipsum available.' },
        { date: '22', month: 'Aug 2026', author: 'Admin', comments: 5, title: 'Never mess with a Man', text: 'There are many variations of passages of Lorem Ipsum available.' }
    ];

    return (
        <div className="section-full p-t80 p-b50 bg-white">
            <div className="container">
                <div className="section-head clearfix">
                    <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
                        <small className="wt-small-title">Blog Section</small>
                        <h2 className="m-b5">Our Latest Blog</h2>
                    </div>
                    <div className="title-right-detail">
                        <p>We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture who try to Ambitions people do that really great.</p>
                    </div>
                </div>
                <div className="row equal-wraper">
                    {/* Main Blog Post */}
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="latest-blog-3-pattern">
                            <div className="blog-post latest-blog-3 overlay-wraper post-overlay large-date bg-cover bg-no-repeat bg-top-center" style={{ backgroundImage: 'url(/images/blog/large-blog.jpg)' }}>
                                <div className="overlay-main opacity-05 bg-black"></div>
                                <div className="wt-post-info p-a30 text-white">
                                    <div className="post-overlay-position">
                                        <div className="post-content-outer bdr-l-8 bdr-solid bdr-primary p-a15">
                                            <div className="wt-post-meta">
                                                <ul>
                                                    <li className="post-date"><strong>26</strong><span>Aug 2025</span></li>
                                                    <li className="post-author"><i className="fa-regular fa-user"></i>By <Link href="/blog">Admin</Link> </li>
                                                    <li className="post-comment"><i className="fa-regular fa-comments"></i> <Link href="/blog">2 comment</Link> </li>
                                                </ul>
                                            </div>
                                            <div className="wt-post-title">
                                                <h3 className="post-title"><Link href="/blog" className="text-white text-capitalize">Hampden-Sydney College in Virginia, looked up one of the more obscure latin words</Link></h3>
                                            </div>
                                            <div className="wt-post-readmore">
                                                <Link href="/blog" className="site-button-link white">Read More</Link>
                                            </div>
                                        </div>
                                        <div className="blog-social-icon">
                                            <ul className="social-tooltips-outer">
                                                <li><a href="https://www.pinterest.com" className="fa-brands fa-pinterest-p" target="_blank" rel="noreferrer"><span className="social-tooltips">Pinterest</span></a></li>
                                                <li><a href="https://web.whatsapp.com/" className="fa-brands fa-whatsapp" target="_blank" rel="noreferrer"><span className="social-tooltips">Whatsapp</span></a></li>
                                                <li><a href="https://www.facebook.com/" className="fa-brands fa-facebook-f" target="_blank" rel="noreferrer"><span className="social-tooltips">Facebook</span></a></li>
                                                <li><a href="https://x.com/" className="fa-brands fa-x-twitter" target="_blank" rel="noreferrer"><span className="social-tooltips">Twitter</span></a></li>
                                                <li><a href="https://www.linkedin.com/" className="fa-brands fa-linkedin-in" target="_blank" rel="noreferrer"><span className="social-tooltips">Linkedin</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Grid Blogs */}
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="row latest-blog-2-outer m-t30">
                            {blogs.map((blog, idx) => (
                                <div key={idx} className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog-post latest-blog-2 mid-size-date bdr-1 bdr-solid bdr-gray p-a20">
                                        <div className="wt-post-info">
                                            <div className="wt-post-meta">
                                                <ul>
                                                    <li className="post-date"><strong>{blog.date} </strong> <span>{blog.month}</span> </li>
                                                    <li className="post-author"><i className="fa-regular fa-user"></i><Link href="/blog">By <span>{blog.author}</span></Link> </li>
                                                    <li className="post-comment"><i className="fa-regular fa-comments"></i> <Link href="/blog">{blog.comments} Comment</Link> </li>
                                                </ul>
                                            </div>
                                            <div className="wt-post-title">
                                                <h4 className="post-title"><Link href="/blog">{blog.title}</Link></h4>
                                            </div>
                                            <div className="wt-post-text">
                                                <p>{blog.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
