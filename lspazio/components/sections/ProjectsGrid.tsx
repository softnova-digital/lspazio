'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const categories = [
    { filter: '*', label: 'All' },
    { filter: 'cat-1', label: 'House' },
    { filter: 'cat-2', label: 'Building' },
    { filter: 'cat-3', label: 'Office' },
    { filter: 'cat-4', label: 'Garden' },
    { filter: 'cat-5', label: 'Interior' },
];

const projects = [
    { id: 1, img: '/images/gallery/pic1.jpg', title: 'House', desc: 'Which is worse, that everyone has his price, or that the price is always so low.', category: 'cat-1' },
    { id: 2, img: '/images/gallery/pic2.jpg', title: 'Building', desc: 'Which is worse, that everyone has his price, or that the price is always so low.', category: 'cat-2' },
    { id: 3, img: '/images/gallery/pic3.jpg', title: 'Office', desc: 'Which is worse, that everyone has his price, or that the price is always so low.', category: 'cat-3' },
    { id: 4, img: '/images/gallery/pic4.jpg', title: 'Garden', desc: 'Which is worse, that everyone has his price, or that the price is always so low.', category: 'cat-4' },
    { id: 5, img: '/images/gallery/pic5.jpg', title: 'Interior', desc: 'Which is worse, that everyone has his price, or that the price is always so low.', category: 'cat-5' },
    { id: 6, img: '/images/gallery/pic6.jpg', title: 'Home', desc: 'Which is worse, that everyone has his price, or that the price is always so low.', category: 'cat-4' },
    { id: 7, img: '/images/gallery/pic7.jpg', title: 'Building', desc: 'Which is worse, that everyone has his price, or that the price is always so low.', category: 'cat-3' },
    { id: 8, img: '/images/gallery/pic8.jpg', title: 'Bathroom', desc: 'Which is worse, that everyone has his price, or that the price is always so low.', category: 'cat-2' },
    { id: 9, img: '/images/gallery/pic9.jpg', title: 'Appartment', desc: 'Which is worse, that everyone has his price, or that the price is always so low.', category: 'cat-1' },
];

export default function ProjectsGrid() {
    const [activeFilter, setActiveFilter] = useState('*');

    const filteredProjects = activeFilter === '*'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <div className="section-full p-t80 p-b50 bg-gray">
            <div className="container">
                {/* PAGINATION START */}
                <div className="filter-wrap p-b30">
                    <ul className="masonry-filter link-style text-uppercase d-flex justify-content-center p-0" style={{ listStyle: 'none', margin: 0 }}>
                        {categories.map((cat, idx) => (
                            <li key={idx} className={activeFilter === cat.filter ? 'active' : ''} style={{ margin: '0 10px' }}>
                                <a
                                    href="#"
                                    onClick={(e) => { e.preventDefault(); setActiveFilter(cat.filter); }}
                                    className={activeFilter === cat.filter ? 'text-primary' : 'text-dark'}
                                    style={{ fontWeight: 600, textDecoration: 'none', padding: '5px 10px', display: 'inline-block' }}
                                >
                                    {cat.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* PAGINATION END */}

                {/* GALLERY CONTENT START */}
                <motion.div layout className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="col-lg-4 col-md-6 col-sm-12 m-b30"
                            >
                                <div className="project-img-effect-1" style={{ position: 'relative', overflow: 'hidden' }}>
                                    <img src={project.img} alt={project.title} className="img-fluid w-100" />
                                    <div className="wt-info" style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', zIndex: 2 }}>
                                        <h3 className="wt-tilte text-white m-b10 m-t0">{project.title}</h3>
                                        <p className="text-white mb-0">{project.desc}</p>
                                    </div>
                                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1, opacity: 0, transition: '0.3s' }} className="overlay-bg-hover"></div>
                                    <Link href="/project-detail" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 3 }}></Link>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                {/* GALLERY CONTENT END */}
            </div>
        </div>
    );
}
