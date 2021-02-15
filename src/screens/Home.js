import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import Hero from '../components/Hero';
import MotionBox from '../components/MotionBox';

const Home = () => {
  return (
    <>
      <MotionBox
        exit={{ x: -2000 }}
        transition={{ duration: 1.1, ease: [0.87, 0, 0.13, 1] }}
      >
        <Hero />
      </MotionBox>
    </>
  );
};

export default Home;
