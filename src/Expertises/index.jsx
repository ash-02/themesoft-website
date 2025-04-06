import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './index.css';
import ParticlesBackground from '../components/ParticlesBackground';
import expertisesData from '../data/expertises-data.json';

const Expertises = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { expertiseSlug } = useParams();
  const expertiseData = expertisesData[expertiseSlug];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!expertiseData) {
    return <div>Expertise not found</div>;
  }

  return (
    <>
      <ParticlesBackground />
      <div className={`expertisesContainer ${isVisible ? 'visible' : ''}`}>
        <section className="expertisesHero">
          <div className="brainIconWrapper">
            <svg className="expertisesBrainIcon" viewBox="0 0 512 512">
              <path d="M256,32C132.3,32,32,132.3,32,256s100.3,224,224,224s224-100.3,224-224S379.7,32,256,32z
                       M256,450.5c-107.4,0-194.5-87.1-194.5-194.5S148.6,61.5,256,61.5S450.5,148.6,450.5,256S363.4,450.5,256,450.5z" />
            </svg>
          </div>
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

        <section className="expertisesBottomSections">
          <div className="relatedServices">
            <h3 className="expertisesSectionTitle">Related Services</h3>
            <ul className="expertisesList">
              {Object.keys(expertisesData)
                .filter(key => key !== expertiseSlug)
                .map((key) => (
                  <li key={key}>
                    <Link to={`/expertise/${key}`} className="expertisesLink">
                      {expertisesData[key].title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Expertises;
