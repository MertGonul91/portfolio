import React from 'react';
import { Flex, Container } from '@chakra-ui/react';
import About from './About';

const Hero = () => {
  return (
    <>
      <Container maxW='60vw' maxH='90vh'>
        <Flex
          justifyContent='center'
          alignContent='center'
          alignItems='center'
          flexWrap='wrap'
        >
          <Flex flex='1' justifyContent='center'>
            <About />
          </Flex>
          <Flex flex='2' justifyContent='center'></Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Hero;
