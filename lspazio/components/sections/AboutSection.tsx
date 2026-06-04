"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="section-full p-t80 p-b80 bg-white overflow-hide">
      <div className="container">
        <div className="section-content">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="arc-home-about-left">
                <div className="arc-home-left-content bg-gray">
                  <h3 className="m-t0 wt-tilte-light">
                    Design Driven by Experience & Precision
                  </h3>
                  <h2 className="m-t0 wt-title">
                    Engineering Spaces That Define Value.
                  </h2>
                  <p>
                    A collaborative architecture studio led by experienced
                    engineers, focused on creating functional, high-impact
                    spaces. We design with clarity, execute with precision, and
                    deliver structures that hold real commercial and aesthetic
                    value.
                  </p>
                  <Link href="/about" className="site-button-link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="arc-home-about-right portfolio-wrap">
                {/* Desktop/Tablet Layout - 2 Columns */}
                <div className="row d-none d-sm-flex">
                  <div className="col-md-6 col-sm-6">
                    <div className="masonry-item">
                      <div className="arc-about-year text-uppercase text-right m-b20">
                        {/* 260 px container — CSS handles opacity:0.1 on the img */}
                        <div
                          className="arc-about-year-pic img-reflection"
                          style={{ height: 260, overflow: "hidden" }}
                        >
                          <Image
                            src="/images/about/s-1.jpg"
                            alt="About"
                            fill
                            sizes="(max-width: 576px) 100vw, 50vw"
                            className="object-cover"
                          />
                        </div>
                        <div className="arc-about-year-info">
                          <span className="title-small">
                            working <br />
                            experience
                          </span>
                          <h2 className="wt-title m-tb0">Year</h2>
                          <span className="text-outline">10</span>
                        </div>
                      </div>
                    </div>

                    <div className="masonry-item">
                      {/* 360 px — prevents the 8064 px tall webp from blowing out the column */}
                      <div
                        className="wt-media m-b20 img-reflection"
                        style={{ height: 360, position: "relative", overflow: "hidden" }}
                      >
                        <Image
                          src="/images/projects/interior.1.webp"
                          alt="About"
                          fill
                          sizes="(max-width: 576px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-6">
                    <div className="masonry-item">
                      <div
                        className="wt-media m-b20 img-reflection"
                        style={{ height: 380, position: "relative", overflow: "hidden" }}
                      >
                        <Image
                          src="/images/projects/interior.1.webp"
                          alt="About"
                          fill
                          sizes="(max-width: 576px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="masonry-item">
                      <div
                        className="wt-media m-b20 img-reflection"
                        style={{ height: 260, position: "relative", overflow: "hidden" }}
                      >
                        <Image
                          src="/images/projects/pro-3.webp"
                          alt="About"
                          fill
                          sizes="(max-width: 576px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Layout - 1 Column (Restores Original Order) */}
                <div className="row d-sm-none">
                  <div className="col-12">
                    <div className="masonry-item">
                      <div className="arc-about-year text-uppercase text-right m-b20">
                        <div
                          className="arc-about-year-pic img-reflection"
                          style={{ height: 260, overflow: "hidden" }}
                        >
                          <Image
                            src="/images/about/s-1.jpg"
                            alt="About"
                            fill
                            sizes="100vw"
                            className="object-cover"
                          />
                        </div>
                        <div className="arc-about-year-info">
                          <span className="title-small">
                            working <br />
                            experience
                          </span>
                          <h2 className="wt-title m-tb0">Year</h2>
                          <span className="text-outline">10</span>
                        </div>
                      </div>
                    </div>

                    <div className="masonry-item">
                      <div
                        className="wt-media m-b20 img-reflection"
                        style={{ height: 320, position: "relative", overflow: "hidden" }}
                      >
                        <Image
                          src="/images/projects/interior.1.webp"
                          alt="About"
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="masonry-item">
                      <div
                        className="wt-media m-b20 img-reflection"
                        style={{ height: 320, position: "relative", overflow: "hidden" }}
                      >
                        <Image
                         src="/images/projects/interior.1.webp"
                          alt="About"
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="masonry-item">
                      <div
                        className="wt-media m-b20 img-reflection"
                        style={{ height: 260, position: "relative", overflow: "hidden" }}
                      >
                        <Image
                          src="/images/projects/pro-3.webp"
                          alt="About"
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                      </div>
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
