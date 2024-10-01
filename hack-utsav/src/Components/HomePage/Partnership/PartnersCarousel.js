import React from 'react';
import Slider from 'react-slick';
import './PartnersCarousel.css'; // Create this file for custom styles

const PartnersCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of logos to show at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2, // Show 2 logos at once on mobile
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2, // Show 2 logos on smaller mobile screens
              slidesToScroll: 1,
            },
          },
        ],
      };
      

  const partners = [
    { id: 1, logo: 'https://res.cloudinary.com/dvhislzt0/image/upload/v1726563281/iqhrvlzbolydrscqnxv7.png', name: 'Partner 1' },
    { id: 2, logo: 'https://res.cloudinary.com/dv0pitmjz/image/upload/v1727778686/Screenshot_2024-10-01_160104_gtvx3y.png', name: 'Partner 2' },
    { id: 3, logo: 'https://res.cloudinary.com/dvhislzt0/image/upload/v1726670401/IIC_judrn1.png', name: 'Partner 3' },
    { id: 4, logo: 'https://res.cloudinary.com/dv0pitmjz/image/upload/v1727777805/Screenshot_2024-10-01_154631_pfiefl.png', name: 'Partner 4' },
    { id: 5, logo: 'https://res.cloudinary.com/dv0pitmjz/image/upload/v1727777969/mongodb_y983hk.png', name: 'Partner 5' },
  ];

  return (
    <div className="carousel-container">
      <h2 className="carousel-heading">Technical Partners</h2>
      <Slider {...settings}>
        {partners.map((partner) => (
          <div key={partner.id} className="carousel-slide">
            <img src={partner.logo} alt={partner.name} className="partner-logo" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnersCarousel;
