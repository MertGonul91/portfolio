import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { Container, Flex, Spacer } from '@chakra-ui/react';
import MotionBox from '../components/MotionBox';

const Home = () => {
  return (
    <>
      <Container maxW='100vw' minW='auto'>
        <Flex direction='column' h='100vh'>
          <Header />
          <Spacer />
          <MotionBox
            exit={{ x: -2000 }}
            transition={{ duration: 1.1, ease: [0.87, 0, 0.13, 1] }}
          >
            <Hero />
          </MotionBox>
          <Spacer />
          <Footer />
        </Flex>
      </Container>
    </>
  );
};

export default Home;
