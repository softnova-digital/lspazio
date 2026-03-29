'use client';

import React from 'react';

export default function ContactSection() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Implement form submission logic here
    };

    return (
        <>
            <div className="section-full p-t80">
                <div className="container">
                    <div className="section-content">
                        <div className="contact-form p-a30 bg-gray">
                            <form className="cons-contact-form" onSubmit={handleSubmit}>
                                <div className="contact-one">
                                    <div className="section-head text-left">
                                        <h3 className="m-b5">Get In Touch</h3>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input name="username" type="text" required className="form-control" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input name="email" type="email" className="form-control" required placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea name="message" rows={4} className="form-control" required placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="text-right">
                                                <button name="submit" type="submit" value="Submit" className="site-button radius-no text-uppercase font-weight-600">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="contact-info text-center m-t80 m-b50">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-4">
                                    <div className="wt-icon-box-wraper center m-b30">
                                        <div className="icon-md m-b20"><i className="sl-icon-phone"></i></div>
                                        <div className="icon-content">
                                            <h4 className="m-t0 font-weight-500 con-in-title">Phone number</h4>
                                            <p>+1 (456) 789 10 12</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="wt-icon-box-wraper center m-b30">
                                        <div className="icon-md m-b20"><i className="sl-icon-envolope"></i></div>
                                        <div className="icon-content">
                                            <h4 className="m-t0 font-weight-500 con-in-title">Email address</h4>
                                            <p>demo@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="wt-icon-box-wraper center m-b30">
                                        <div className="icon-md m-b20"><i className="sl-icon-map"></i></div>
                                        <div className="icon-content">
                                            <h4 className="m-t0 font-weight-500 con-in-title">Address info</h4>
                                            <p>55/11 Land Street, Modern New Yourk City, USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="gmap-outline">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6309.495304446196!2d-122.43885472228101!3d37.74906395235639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e12a1d66d03%3A0xb8c905ae4e81369b!2sQ-Architecture!5e0!3m2!1sen!2sin!4v1623689156327!5m2!1sen!2sin"
                    style={{ border: 0, width: '100%', height: '400px' }}
                    allowFullScreen
                    loading="lazy">
                </iframe>
            </div>
        </>
    );
}
