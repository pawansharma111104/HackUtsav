import React from 'react';
import './sponsor.css'; // Add your custom styles here

const Sponsor = () => {
  const sponsors = [
    {
      name: 'ACM',
      logo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1727775859/hp92h56jtc2ij8csysh0.png', // Replace with actual logo URL
    },
    // {
    //   name: 'Sponsor Two',
    //   logo: 'https://via.placeholder.com/150', // Replace with actual logo URL
    // },
  ];

  return (
    <div className="sponsor-page">
      <h1>Our Sponsor</h1>
      <div className="sponsor-list">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor-card">
            <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="sponsor-logo" />
            <p className="sponsor-name">{sponsor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
