import React from 'react';
import { Flex, useMediaQuery, Container } from '@chakra-ui/react';
import About from './About';

const Hero = () => {
  const [desktop] = useMediaQuery('(min-width: 1280px)');
  const [mobile] = useMediaQuery('(max-width: 450px)');

  const about = "I'm Mert Gönül, a Full Stack Developer and an Architect.";

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
