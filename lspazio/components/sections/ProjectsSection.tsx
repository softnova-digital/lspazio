'use client';

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProjectsSection() {
    const projects = [
        { title: 'Architecture design', img: '/images/gallery/pic1.jpg' },
        { title: 'Interior design', img: '/images/gallery/pic2.jpg' },
        { title: 'Landscap design', img: '/images/gallery/pic3.jpg' },
        { title: 'Floor design', img: '/images/gallery/pic4.jpg' },
        { title: 'Roof top design', img: '/images/gallery/pic5.jpg' },
        { title: 'Decorations', img: '/images/gallery/pic6.jpg' },
        { title: 'Architecture design', img: '/images/gallery/pic7.jpg' }
    ];

    return (
        <div className="section-full p-t80 p-b80 bg-secondry">
            <div className="container">
                <div className="section-head clearfix">
                    <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid text-white">
                        <small className="wt-small-title">All Projects</small>
                        <h2 className="m-b5">Our Latest Projects</h2>
                    </div>
                    <div className="title-right-detail text-white">
                        <p>We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture who try to Ambitions people do that really great.</p>
                    </div>
                </div>
            </div>
            <div className="section-content">
                <div className="container-fluid">
                    <div className="projects-slider-two">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1280: { slidesPerView: 4 }
                            }}
                            className="projects-carousel-two"
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={index}>
                                    <div className="item">
                                        <div className="projects-two-info text-white">
                                            <h3 className="wt-tilte m-t0" data-title={`0${index + 1}`}><Link href="/projects" className="text-white">{project.title}</Link></h3>
                                            <p>We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture.</p>
                                            <div className="wt-media img-reflection">
                                                <img src={project.img} alt={project.title} />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}
