import React from 'react';
import HackathonContainer from './MainCont/HackathonContainer';
import Countdown from './Counter/Countdown'
import Header from '../Header/Header';
import Themes from './CardContainer/Themes';
import Timeline from './TimelineCont/Timeline';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
    <Header></Header>
        <HackathonContainer></HackathonContainer>
        <Countdown></Countdown>
        <Timeline></Timeline>
        <Themes></Themes>
        <Footer></Footer>
    </>
  );
};

export default Home;
