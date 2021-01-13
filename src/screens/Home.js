import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { Container, Flex, Spacer, useMediaQuery } from '@chakra-ui/react';

const Home = () => {
  const [mobile] = useMediaQuery('(max-width: 450px)');
  return (
    <>
      {mobile ? (
        <Container maxW='100vw' minW='auto'>
          <Flex direction='column' h='100vh'>
            <Header />
            <Hero />
            <Footer />
          </Flex>
        </Container>
      ) : (
        <Container maxW='100vw' minW='auto'>
          <Flex direction='column' h='100vh'>
            <Header />
            <Spacer />
            <Hero />
            <Spacer />
            <Footer />
          </Flex>
        </Container>
      )}
    </>
  );
};

export default Home;
