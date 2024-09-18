import React from 'react';
import './MeetTheTeam.css'; // Import a CSS file for styling
import Header from '../Header/Header';


const Team = () => {
  const patrons = [
    { name: 'Prof. Prem Vrat (Pro Chancellor)', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726668178/tikplykh0jvor1p9piha.jpg' },
    { name: 'Prof. Nupur Prakash (Vice Chancellor)', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666230/mnsnjxfvbozwctolxm4e.webp' },
  ];

  const convenor = [
    { name: 'Prof. Rita Chhikara', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666229/lg0din2ztidposwtkmce.webp' },
  ];

  const coordinators = [
    { name: 'Dr. Poonam Chaudhary', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666228/zafcu3cppzixljvetmvh.webp' },
    { name: 'Dr. Prerna Singal', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666230/ymjfzobqftuoep8rbloo.webp' },
  ];

  const teamMembers = [
    { name: 'Ms. Akanksha Kaushik', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666229/nzkggjaueu4dxfufybho.webp' },
    { name: 'Ms. Bhavana', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666228/nzki85rl61k5nftjqobc.webp' },
    { name: 'Dr. Garima Sharma', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666229/qbl7fc7535mvumzak3h8.webp' },
    { name: 'Dr. Meghna Sharma', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666228/muqupbcfehqbz6h7kto8.webp' },
    { name: 'Dr. Monika Lamba', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666230/zo6fs4tw20k6n4nuvequ.webp' },
    { name: 'Ms. Monika Yadav', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666230/xdcqvvbtg3n8xmqfplr4.webp' },
    { name: 'Dr. Namita Dahiya', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666228/l1isanwediu7nvivb7yl.webp' },
    { name: 'Dr. Neeti Kashyap', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666229/tekpujtgg1apka2cf78s.webp' },
    { name: 'Dr. Nidhi Malik', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666229/cqzbo1p5yu5b7ash4xj3.webp' },
    { name: 'Dr. Nishu Sethi', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666228/wnfg4qcoozep5flvqbw0.webp' },
    { name: 'Dr. Prachi Ahlawat', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666230/s7qpzz6ulf0eph4oiuut.webp' },
    { name: 'Mr. Pulkit', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666230/lkd1oj9xlgz0enqrvhmv.webp' },
    { name: 'Dr. Shilpa Mahajan', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666230/nbf0gmjbzctfyluy1a3x.webp' },
    { name: 'Dr. Shradhha Arora', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666228/kldrjtxv8tcough1ffxb.webp' },
    { name: 'Ms. Sneha', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666229/qhbvslijfu7mzflzg1fr.webp' },
    { name: 'Mr. Sumit Kumar', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666229/fiutjskud6ktuaax6b2g.webp' },
    { name: 'Dr. Srishti Sharma', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666228/ikzvn1j7fxbpi7gei6zf.webp' },
    { name: 'Ms. Vandana', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666229/tqi1w9jmpwcwj92rmruv.webp' },
    { name: 'Dr. Vandana Khanna', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666229/joiyco33tnnhjdpbpez5.webp' },
    { name: 'Dr. Yogita Gigras', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726666229/clcxxtubhzvx4qxpoodn.webp' },   
  ]

  const studentCoordinators = [
    { name: 'Madhur', photo: 'https://res.cloudinary.com/ddznylzdr/image/upload/v1726669406/nqibhnpzqxghf2clllur.jpg' },
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

          <h2>Team Members</h2>
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
