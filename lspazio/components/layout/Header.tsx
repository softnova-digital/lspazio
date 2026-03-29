'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Check initial state
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="site-header header-style-1 header-fixed nav-wide">
            <div className="main-bar-wraper navbar-expand-lg">
                <div className={`main-bar p-t5 ${isScrolled || isMobileMenuOpen ? 'color-fill' : ''}`}>
                    <div className="container">
                        <div className="logo-header">
                            <div className="logo-header-inner logo-header-one">
                                <Link href="/">
                                    <img src="/images/logo-light.png" alt="Archmvz" />
                                </Link>
                            </div>
                        </div>

                        {/* NAV Toggle Button */}
                        <button
                            data-target=".header-nav"
                            data-toggle="collapse"
                            type="button"
                            className={`navbar-toggler ${isMobileMenuOpen ? '' : 'collapsed'}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="icon-bar bar-one"></span>
                            <span className="icon-bar bar-two"></span>
                            <span className="icon-bar bar-three"></span>
                        </button>

                        {/* ETRA Nav */}
                        <div className="extra-nav">
                            <div className="extra-cell">
                                <button
                                    onClick={() => setIsSearchOpen(true)}
                                    className="text-white bg-transparent border-0"
                                    style={{ cursor: 'pointer' }}
                                >
                                    <Search size={18} />
                                </button>
                            </div>
                        </div>

                        {/* SITE Search */}
                        <div id="search" className={isSearchOpen ? 'open' : ''}>
                            <span className="close" onClick={() => setIsSearchOpen(false)}></span>
                            <form role="search" id="searchform" action="/search" method="get" className="radius-xl">
                                <div className="input-group">
                                    <input className="form-control" name="q" type="search" placeholder="Type to search" />
                                    <span className="input-group-append">
                                        <button type="button" className="search-btn">
                                            <i className="sl-icon-magnifier"></i>
                                        </button>
                                    </span>
                                </div>
                            </form>
                        </div>

                        {/* MAIN Vav */}
                        <div className={`header-nav navbar-collapse collapse justify-content-end ${isMobileMenuOpen ? 'show' : ''}`}>
                            <ul className="nav navbar-nav">
                                <li className="active">
                                    <Link href="#">Home</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="#">Home 1</Link></li>
                                        <li><Link href="#">Home 2</Link></li>
                                        <li><Link href="#">Home 3</Link></li>
                                        <li><Link href="#">Home 4</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/about">About</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact us</Link>
                                </li>
                                <li>
                                    <Link href="#">Blog</Link>
                                    <ul className="sub-menu has-child">
                                        <li><Link href="/blog">Blog Grid</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu-direction">
                                    <Link href="/projects">Projects</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="/projects">Project Grid</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
