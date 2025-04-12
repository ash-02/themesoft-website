import React from 'react';
import './index.css';

import wbencLogo from './certificateImages/wbenc-300x167.png';
import nmsdcLogo from './certificateImages/nmsdc-300x179.png';
import sbeLogo from './certificateImages/sbe-300x205.jpeg';
import dfwLogo from './certificateImages/nwmw-300x100.png';
import hubLogo from './certificateImages/hub.png';
import camscLogo from './certificateImages/camsc-300x225.png';

const certifications = [
  {
    id: 1,
    logo: wbencLogo,
    title: "Certified WBENC Women's Business Enterprise",
    alt: 'WBENC Certification'
  },
  {
    id: 2,
    logo: nmsdcLogo,
    title: 'MBE – National Minority Supplier Development Council',
    alt: 'NMSDC Certification'
  },
  {
    id: 3,
    logo: dfwLogo,
    title: 'Dallas/Fort Worth Minority Supplier Development Council, Inc.',
    alt: 'DFW MSDC Certification'
  },
  {
    id: 4,
    logo: hubLogo,
    title: 'Texas Historically Underutilized Business (HUB) Certificate',
    alt: 'HUB Certification'
  },
  {
    id: 5,
    logo: sbeLogo,
    title: 'Certified Women-Owned Business Enterprise',
    alt: 'SBE Certification'
  },
  {
    id: 6,
    logo: camscLogo,
    title: 'Canadian aboriginal and minority supplier council (camsc) certification',
    alt: 'CAMSC Certification'
  }
];

const Certifications = () => {
  return (
    <div className="diversity-wrapper">
      <div className="diversity-container">
        <div className="diversity-header">
          <h1 className="diversity-title">Certifications</h1>
          <p className="diversity-description">
            At Themesoft, we are proud to be recognized by leading certification bodies that validate our commitment to diversity, 
            inclusion, and excellence in service delivery. Our certifications demonstrate our dedication to maintaining the highest 
            standards of business practices and our contribution to creating a more inclusive business environment.
          </p>
        </div>
        <div className="diversity-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="diversity-card">
              <div className="diversity-image-container">
                <img src={cert.logo} alt={cert.alt} className="diversity-image" />
              </div>
              <p className="diversity-card-title">{cert.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;