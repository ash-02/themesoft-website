import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './index.css';
import ParticlesBackground from '../components/ParticlesBackground';
import expertisesData from '../data/expertises-data.json';
import shieldSvg from '../assets/test/shield.svg';
import brainSvg from '../assets/test/brain.svg';
import cloudSvg from '../assets/test/cloud.svg';
import softwareSvg from '../assets/test/software.svg';

const svgMap = {
  'cyber-security': shieldSvg,
  'artificial-intelligence': brainSvg,
  'cloud-and-data-services': cloudSvg,
  'software-consulting': softwareSvg
};

const Expertises = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { expertiseSlug } = useParams();
  const expertiseData = expertisesData[expertiseSlug];
  const backgroundSvg = svgMap[expertiseSlug] || shieldSvg;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleRelatedServiceClick = (key) => (e) => {
    e.preventDefault();
    window.location.href = `/expertise/${key}`;
  };

  if (!expertiseData) {
    return <div>Expertise not found</div>;
  }

  return (
    <>
      <ParticlesBackground />
      <div className="shield-background">
        <img src={backgroundSvg} alt={`${expertiseData.title} background`} />
      </div>
      <div className={`expertisesContainer ${isVisible ? 'visible' : ''}`}>
        <section className="expertisesHero">
          <h1 className="expertisesTitle">{expertiseData.title}</h1>
          <h2 className="expertisesSubtitle">{expertiseData.subtitle}</h2>
          <p className="expertisesDescription">
            {expertiseData.description}
          </p>
        </section>

        <section className="expertisesColumns">
          {expertiseData.features.map((feature) => (
            <div key={feature.id} className="expertisesCard">
              <div className="expertisesCardIcon">
                <span className="text-4xl">{feature.icon}</span>
              </div>
              <div className="expertisesCardContent">
                <h3 className="expertisesCardTitle">{feature.title}</h3>
                <p className="expertisesCardText">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className="relatedServices">
          <h3 className="expertisesSectionTitle">Related Services</h3>
          <ul className="expertisesList">
            {Object.keys(expertisesData)
              .filter(key => key !== expertiseSlug)
              .map((key) => (
                <li key={key}>
                  <a 
                    href={`/expertise/${key}`}
                    onClick={handleRelatedServiceClick(key)}
                    className="expertisesLink"
                  >
                    {expertisesData[key].title}
                  </a>
                </li>
              ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Expertises;
