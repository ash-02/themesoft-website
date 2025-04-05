import React from 'react';
import './ExpertiseSection.css';

interface ExpertiseCardProps {
  title: string;
  description: string;
  iconPath: string;
  delay: number;
}

const AnimatedIcon: React.FC<{ iconPath: string }> = ({ iconPath }) => (
  <div className="animated-icon-container">
    <div className="icon-pulse"></div>
    <div className="icon-ring"></div>
    <div className="icon-wrapper">
      <img src={iconPath} alt="" className="animated-icon" />
    </div>
  </div>
);

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ title, description, iconPath, delay }) => (
  <div className="expertise-card" style={{ '--delay': `${delay}ms` } as React.CSSProperties}>
    <AnimatedIcon iconPath={iconPath} />
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="card-footer">
      <button className="learn-more">Learn More</button>
    </div>
  </div>
);

const ExpertiseSection: React.FC = () => {
  const expertiseData = [
    {
      title: "Artificial Intelligence",
      description: "Transform your business with our AI solutions. We specialize in automation and focused AI implementation that saves time and money.",
      iconPath: "/icons/ai-animated.svg",
      delay: 100
    },
    {
      title: "Cyber Security",
      description: "Make your product's security bulletproof. We understand the critical importance of protecting your digital assets.",
      iconPath: "/icons/security-animated.svg",
      delay: 200
    },
    {
      title: "Cloud And Data Services",
      description: "Access your infrastructure seamlessly through reliable cloud solutions. We help you leverage the full potential of cloud computing.",
      iconPath: "/icons/cloud-animated.svg",
      delay: 300
    },
    {
      title: "Digital Transformation",
      description: "Navigate your digital journey with our comprehensive transformation solutions and strategic guidance.",
      iconPath: "/icons/digital-animated.svg",
      delay: 400
    }
  ];

  return (
    <section className="expertise-section">
      <div className="expertise-background">
        <div className="gradient-sphere"></div>
        <div className="grid-pattern"></div>
      </div>
      
      <div className="section-header">
        <h2>Our Expertise</h2>
        <p>Discover how our comprehensive range of services can transform your business</p>
      </div>
      
      <div className="expertise-container">
        {expertiseData.map((expertise, index) => (
          <ExpertiseCard
            key={expertise.title}
            {...expertise}
          />
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection; 