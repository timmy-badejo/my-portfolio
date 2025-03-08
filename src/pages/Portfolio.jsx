import React from 'react';
import Card from '../components/Card';
import dedicationIcon from '../assests/dedication.svg';
import smartWorkIcon from '../assests/smart_work.svg';
import collaborationIcon from '../assests/collaboration.svg';
import technologyIcon from '../assests/technology.svg';

const features = [
  {
    icon: dedicationIcon,
    title: 'Dedication',
    description: 'I am committed to continuously improving myself and my skills, always striving for consistency and focus. My approach to design and problem-solving is centered on delivering thoughtful, high-quality solutions that enhance user experience and efficiency. I believe that every project is an opportunity to grow and refine my craft.',
  },
  {
    icon: smartWorkIcon,
    title: 'Smart Work',
    description: 'I break down complex tasks into manageable pieces, allowing me to work efficiently without feeling overwhelmed. By structuring my workflow strategically, I ensure that I deliver high-quality work while maintaining a sustainable pace, avoiding burnout, and staying motivated throughout the process.',
  },
  {
    icon: collaborationIcon,
    title: 'Collaboration',
    description: 'I thrive in team environments, working closely with my peers to bring ideas to life. I am always ready to take on development tasks and open to feedback, suggestions, and different perspectives. I believe that collaboration fosters innovation, and I actively seek input from others to improve my work and contribute to the success of our projects.',
  },
  {
    icon: technologyIcon,
    title: 'Technology',
    description: 'I continuously explore and adapt to new technologies to enhance my designs and solve complex design challenges. Staying updated with industry trends allows me to incorporate the latest tools and techniques into my work, ensuring that my solutions are both innovative and effective.',
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h2 className="section-title">My Approach</h2>
      <div className="cards-container">
        {features.map((feature, index) => (
          <Card
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
