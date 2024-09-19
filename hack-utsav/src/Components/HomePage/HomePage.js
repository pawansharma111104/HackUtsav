import React from 'react';
import HackathonContainer from './MainCont/HackathonContainer';
import Countdown from './Counter/Countdown'
import Header from '../Header/Header';
import Themes from './CardContainer/Themes';
import Timeline from './TimelineCont/Timeline';
import Footer from '../Footer/Footer';
import ChatBot from '../Chatbot/ChatBot';
const Home = () => {
  return (
    <>
    <Header></Header>
        <HackathonContainer></HackathonContainer>
        <Countdown></Countdown>
        <Timeline></Timeline>
        <Themes></Themes>
        <ChatBot></ChatBot>
        <Footer></Footer>
    </>
  );
};

export default Home;
