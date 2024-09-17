import React from 'react';
import HackathonContainer from './MainCont/HackathonContainer';
import Countdown from './Counter/Countdown'
import Header from '../Header/Header';
import Themes from './CardContainer/Themes';
import Timeline from './TimelineCont/Timeline';

const Home = () => {
  return (
    <>
    <Header></Header>
        <HackathonContainer></HackathonContainer>
        <Countdown></Countdown>
        <Timeline></Timeline>
        <Themes></Themes>
    </>
  );
};

export default Home;
