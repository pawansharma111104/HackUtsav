import React from "react";
import BlogCard from './BlogCard';
import Header from "../Header/Header";
// Import GIFs from the assets folder
// import health from '../assets/health.gif';
// import edu from '../assets/edu.gif';
// import sus from '../assets/sus.gif';
// import climate from '../assets/climate.gif';
// import law from '../assets/law.png';
import Footer from "../Footer/Footer";
function Themes() {
  return (
    <>
    <Header></Header>
    <div className="themes-container">
      <div className="cards-container">
        <BlogCard 
          imageUrl="https://res.cloudinary.com/ddznylzdr/image/upload/v1726505618/phwvrmfgkztnnckdioba.gif"
          title="Zero Hunger & Good Health and Well-being" 
          subtitle="(SDG 2) & (SDG 3)" 
          description={
            <ul>
              <li>Develop solutions to reduce food waste and improve distribution efficiency.</li>
              <li>Create platforms connecting surplus food from restaurants and events to those in need.</li>
              <li>Design agricultural technologies to enhance crop yields while minimizing resource usage.</li>
              <li>Build applications promoting mental health awareness and providing support resources.</li>
              <li>Develop wearable technology for remote health monitoring and early disease detection.</li>
              <li>Create platforms for sharing healthcare data to improve medical research and treatment outcomes.</li>
            </ul>
          }
          alt={false} // Image on the right
        />
        
        <BlogCard 
          imageUrl="https://res.cloudinary.com/ddznylzdr/image/upload/v1726505660/mp75oezrzvrz0p2i4ja3.gif"
          title="Quality Education" 
          subtitle="(SDG 4)" 
          description={
            <ul>
              <li>Develop interactive educational apps to make learning more engaging and accessible.</li>
              <li>Create platforms connecting volunteer tutors with students in underserved communities.</li>
              <li>Design tools to measure and improve educational outcomes in remote or marginalized areas.</li>
            </ul>
          }
          alt={true} // Image on the left
        />
        
        <BlogCard 
          imageUrl="https://res.cloudinary.com/ddznylzdr/image/upload/v1726505735/joylogaej7e7sn0kt32p.gif"
          title="Clean Water & Clean Energy" 
          subtitle="(SDG 6) & (SDG 7)" 
          description={
            <ul>
              <li>Develop water purification technologies for areas with limited access to clean water.</li>
              <li>Create apps to track water usage and promote conservation practices.</li>
              <li>Design low-cost sanitation solutions for communities lacking proper facilities.</li>
              <li>Develop renewable energy monitoring and management systems.</li>
              <li>Create apps to promote energy efficiency and behavior change.</li>
              <li>Design innovative solutions for decentralized energy generation in rural areas.</li>
            </ul>
          }
          alt={false} // Image on the right
        />
        
        <BlogCard 
          imageUrl="https://res.cloudinary.com/ddznylzdr/image/upload/v1726505532/djkq5oys2gqucrsmlcl4.gif"
          title="Sustainable Cities and Communities & Climate Action" 
          subtitle="(SDG 11) & (SDG 13)" 
          description={
            <ul>
              <li>Develop apps for efficient public transportation and urban mobility.</li>
              <li>Create platforms for sharing resources within local communities to reduce waste.</li>
              <li>Design smart city solutions for energy management, waste reduction, and traffic optimization.</li>
              <li>Develop tools for tracking and reducing carbon footprints at individual and organizational levels.</li>
              <li>Create apps to promote sustainable lifestyle choices and raise awareness about climate change.</li>
              <li>Design solutions for climate resilience and adaptation in vulnerable communities.</li>
            </ul>
          }
          alt={true} // Image on the left
        />
        
        <BlogCard 
          imageUrl="https://res.cloudinary.com/ddznylzdr/image/upload/v1726505777/mtp5ccau42dcywfb4ilp.png"
          title="Peace, Justice, and Strong Institutions & Partnerships for the Goals" 
          subtitle="(SDG 16) & (SDG 17)" 
          description={
            <ul>
              <li>Develop solutions that make legal resources and justice more accessible, especially for marginalized communities.</li>
              <li>Build tools that help communities prevent and respond to violence, ensuring safer and more inclusive societies.</li>
              <li>Create solutions to enhance the cyber resilience of institutions involved in global partnerships.</li>
              <li>Develop cybersecurity training platforms for organizations engaged in sustainable development.</li>
            </ul>
          }
          alt={false} // Image on the right
        />
        <BlogCard 
          imageUrl="https://res.cloudinary.com/ddznylzdr/image/upload/v1726505827/yq0yd2dvwcz0jm0eyabv.png"
          title="Student Innovation" 
          subtitle="(Open for Any Ideas)" 
          description={
            <ul>
              <li>If your idea doesn't fit into any of the categories above, it belongs here!</li>
              <li>This theme is open to any innovative solution or concept that addresses a unique challenge.</li>
              <li>Bring your creative ideas, no matter the field, and turn them into impactful solutions.</li>
            </ul>
          }
          alt={true} // Image on the left
        />
      </div>
    </div>
    </>
  );
}

export default Themes;
