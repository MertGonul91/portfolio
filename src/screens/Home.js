import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { Container, Flex, Spacer } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
      <Container maxW='80vw'>
        <Flex direction='column' h='100vh'>
          <Header />
          <Spacer />
          <Hero />
          <Spacer />
          <Footer />
        </Flex>
      </Container>
    </>
  );
};

export default Home;
