import React from 'react';
import './MeetTheTeam.css'; // Import a CSS file for styling
import Header from '../Header/Header';


const Team = () => {
  const patrons = [
    { name: 'Prof. Prem Vrat (Pro Chancellor)', photo: 'https://example.com/photos/prem_vrat.jpg' },
    { name: 'Prof. Nupur Prakash (Vice Chancellor)', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666230/mnsnjxfvbozwctolxm4e.webp' },
  ];

  const convenor = [
    { name: 'Prof. Rita Chhikara', photo: 'https://example.com/photos/rita_chhikara.jpg' },
  ];

  const coordinators = [
    { name: 'Dr. Poonam Chaudhary', photo: 'https://example.com/photos/poonam_chaudhary.jpg' },
    { name: 'Dr. Prerna Singal', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666230/ymjfzobqftuoep8rbloo.webp' },
  ];

  const teamMembers = [
    { name: 'Ms. Akanksha Kaushik', photo: 'https://example.com/photos/akanksha.jpg' },
    { name: 'Ms. Bhavana', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666228/nzki85rl61k5nftjqobc.webp' },
    { name: 'Dr. Garima Sharma', photo: 'https://example.com/photos/garima.jpg' },
    { name: 'Dr. Meghna Sharma', photo: 'https://example.com/photos/meghna.jpg' },
    { name: 'Dr. Monika Lamba', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666230/zo6fs4tw20k6n4nuvequ.webp' },
    { name: 'Ms. Monika Yadav', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666230/xdcqvvbtg3n8xmqfplr4.webp' },
    { name: 'Dr. Namita Dahiya', photo: 'https://example.com/photos/namita.jpg' },
    { name: 'Dr. Neeti Kashyap', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666229/tekpujtgg1apka2cf78s.webp' },
    { name: 'Dr. Nidhi Malik', photo: 'https://example.com/photos/nidhi.jpg' },
    { name: 'Dr. Nishu Sethi', photo: 'https://example.com/photos/nishu.jpg' },
    { name: 'Dr. Prachi Ahlawat', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666230/s7qpzz6ulf0eph4oiuut.webp' },
    { name: 'Mr. Pulkit', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666230/lkd1oj9xlgz0enqrvhmv.webp' },
    { name: 'Dr. Shilpa Mahajan', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666230/nbf0gmjbzctfyluy1a3x.webp' },
    { name: 'Dr. Shradhha Arora', photo: 'https://example.com/photos/shradhha.jpg' },
    { name: 'Ms. Sneha', photo: 'https://example.com/photos/sneha.jpg' },
    { name: 'Mr. Sumit Kumar', photo: 'https://example.com/photos/sumit.jpg' },
    { name: 'Dr. Srishti Sharma', photo: 'https://example.com/photos/srishti.jpg' },
    { name: 'Ms. Vandana', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666229/tqi1w9jmpwcwj92rmruv.webp' },
    { name: 'Dr. Vandana Khanna', photo: 'https://example.com/photos/vandana_khanna.jpg' },
    { name: 'Dr. Yogita Gigras', photo: 'https://example.com/photos/yogita.jpg' },   
  ]

  const studentCoordinators = [
    { name: 'Madhur', photo: 'https://example.com/photos/madhur.jpg' },
    { name: 'Priyanshu', photo: 'https://example.com/photos/priyanshu.jpg' },
    { name: 'Pawan', photo: 'https://example.com/photos/pawan.jpg' },
    { name: 'Raman', photo: 'https://example.com/photos/raman.jpg' },
    { name: 'Rahul', photo: 'https://example.com/photos/rahul.jpg' },
    { name: 'Shubh', photo: 'https://example.com/photos/shubh.jpg' },
  ].sort((a, b) => a.name.localeCompare(b.name)); // Sort names alphabetically

  return (
    <>
    <Header></Header>
    <div className="team-container">
          <h2>Patrons</h2>
          <div className="team-grid">
              {patrons.map((member, index) => (
                  <div key={index} className="team-member">
                      <img src={member.photo} alt={member.name} className="team-photo" />
                      <p>{member.name}</p>
                  </div>
              ))}
          </div>

          <h2>Convenor</h2>
          <div className="team-grid">
              {convenor.map((member, index) => (
                  <div key={index} className="team-member">
                      <img src={member.photo} alt={member.name} className="team-photo" />
                      <p>{member.name}</p>
                  </div>
              ))}
          </div>

          <h2>Coordinators</h2>
          <div className="team-grid">
              {coordinators.map((member, index) => (
                  <div key={index} className="team-member">
                      <img src={member.photo} alt={member.name} className="team-photo" />
                      <p>{member.name}</p>
                  </div>
              ))}
          </div>

          <h2>Team Members (Alphabetical Order)</h2>
          <div className="team-grid">
              {teamMembers.map((member, index) => (
                  <div key={index} className="team-member">
                      <img src={member.photo} alt={member.name} className="team-photo" />
                      <p>{member.name}</p>
                  </div>
              ))}
          </div>

          <h2>Student Coordinators</h2>
          <div className="team-grid">
              {studentCoordinators.map((member, index) => (
                  <div key={index} className="team-member">
                      <img src={member.photo} alt={member.name} className="team-photo" />
                      <p>{member.name}</p>
                  </div>
              ))}
          </div>
      </div></>
  );
};

export default Team;
