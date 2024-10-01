import React from 'react';
import HackathonContainer from './MainCont/HackathonContainer';
import Countdown from './Counter/Countdown'
import Header from '../Header/Header';
import Themes from './CardContainer/Themes';
import Sponsor from './Sponsors/sponsor'
import Timeline from './TimelineCont/Timeline';
import Footer from '../Footer/Footer';
import ChatBot from '../Chatbot/ChatBot';
 import CarouselComponent from './Extended/CarouselComponent';
 import PartnersCarousel from './Partnership/PartnersCarousel';
const Home = () => {
  return (
    <>
    <Header></Header>
    <CarouselComponent></CarouselComponent>
        <HackathonContainer></HackathonContainer>
        <Countdown></Countdown>
        <Timeline></Timeline>
        <Themes></Themes>
        <Sponsor></Sponsor>
        <ChatBot></ChatBot>
        <PartnersCarousel/>
        <Footer></Footer>
    </>
  );
};

export default Home;
