"use client";

import React from "react";

export default function TeamSection() {
  const team = [
    {
      name: "AR Kuthubudheen",
      position: "Architect",
      img: "/images/teams/team-1.webp",
      instagram: "https://www.instagram.com/arkuthubu/",
      whatsapp: "https://wa.me/918921895625",
      facebook: "https://www.facebook.com/profile.php?id=100093997151238&ref=NONE_ig_profile_ac",
    },
    {
      name: "ajmal e",
      position: "Architect",
      img: "/images/teams/team-2.webp",
      instagram: "#",
      whatsapp: "https://wa.me/919656600493",
      facebook: "#",
    },
    {
      name: "kabeer m",
      position: "Architect",
      img: "/images/teams/team-3.webp",
      instagram: "#",
      whatsapp: "#",
      facebook: "#",
    },
  ];

  return (
    <div className="section-full p-t80 p-b50 bg-white our-team-two">
      <div className="container">
        <div className="section-head clearfix">
          <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
            <small className="wt-small-title">Our Experts</small>
            <h2 className="m-b5">Our Best Team</h2>
          </div>
          <div className="title-right-detail">
            <p>
              We deliver innovative architectural solutions with precision and
              purpose. Our team combines creativity and technical expertise to
              design spaces that are functional, sustainable, and timeless.
            </p>
          </div>
        </div>

        <div className="section-content">
          <div className="row justify-content-center">
            {team.map((member, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 col-sm-12">
                <div className="wt-team-arc2">
                  <div className="wt-media">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      style={{
                        width: "100%",
                        aspectRatio: "1/1",
                        objectFit: "cover"
                      }}
                    />
                    <div className="team-social-center">
                      <ul className="team-social-icon">
                        <li>
                          <a
                            href={member.instagram}
                            className="fa-brands fa-instagram"
                            target="_blank"
                            rel="noreferrer"
                          ></a>
                        </li>
                        <li>
                          <a
                            href={member.whatsapp}
                            className="fa-brands fa-whatsapp"
                            target="_blank"
                            rel="noreferrer"
                          ></a>
                        </li>
                        <li>
                          <a
                            href={member.facebook}
                            className="fa-brands fa-facebook-f"
                            target="_blank"
                            rel="noreferrer"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="wt-info bg-white p-a30">
                    <div className="team-detail text-center">
                      <h3 className="m-t0">{member.name}</h3>
                      <p>{member.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
