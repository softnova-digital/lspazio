'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function Testimonials() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    const testimonials = [
        { name: 'Poul Anderson', position: 'Architect', img: '/images/testimonials/pic1.jpg', text: '“Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.' },
        { name: 'Poul Anderson', position: 'Architect', img: '/images/testimonials/pic2.jpg', text: '“Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.' },
        { name: 'Poul Anderson', position: 'Architect', img: '/images/testimonials/pic3.jpg', text: '“Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.' },
        { name: 'Poul Anderson', position: 'Architect', img: '/images/testimonials/pic4.jpg', text: '“Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.' },
        { name: 'Poul Anderson', position: 'Architect', img: '/images/testimonials/pic5.jpg', text: '“Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.' },
    ];

    return (
        <div className="section-full p-tb80 testimonial-slider-outer bg-white bg-cover bg-left-center" style={{ backgroundImage: 'url(/images/background/bg-1.jpg)' }}>
            <div className="container">
                <div className="section-head clearfix">
                    <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
                        <small className="wt-small-title">Best Clients</small>
                        <h2 className="m-b5">Our Client says</h2>
                    </div>
                    <div className="title-right-detail">
                        <p>We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture who try to Ambitions people do that really great.</p>
                    </div>
                </div>

                <div className="testimonial-slider">
                    <Swiper
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="owl-theme"
                    >
                        {testimonials.map((test, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="item">
                                    <div className="testimonial-slider-content clearfix">
                                        <div className="testimonial-1 clearfix">
                                            <div className="testimonial-text">
                                                <div className="testimonial-paragraph">
                                                    <div className="quote-left"></div>
                                                    <p>{test.text}</p>
                                                </div>
                                                <div className="testimonial-detail">
                                                    <h3 className="testimonial-name m-b5">{test.name}</h3>
                                                </div>
                                                <div className="testimonial-detail">
                                                    <span className="testimonial-position">{test.position}</span>
                                                </div>
                                            </div>
                                            <div className="testimonial-pic-block">
                                                <div className="testimonial-pic">
                                                    <img src={test.img} alt={test.name} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="testimonial-1-thumb"
                        style={{ marginTop: '20px' }}
                    >
                        {[1, 2, 3, 4, 5].map((num, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="item" style={{ cursor: 'pointer' }}>
                                    <div className="wt-media">
                                        <img src={`/images/testimonials/small/${num}.jpg`} alt={`Thumbnail ${num}`} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
