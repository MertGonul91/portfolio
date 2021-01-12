import React from 'react';
import { Image, Box, Center, Flex } from '@chakra-ui/react';

const Hero = () => {
  return (
    <>
      <Center>
        <Box _hover={{ bg: 'black', color: 'white' }}>
          <h1>I'm Mert Gönül, a developer and an architect.</h1>
        </Box>
        <Box boxSize='sm'>
          <img src='enfekte.png' alt='' />
          <Image objectFit='cover' src='../enfekte.png' alt='Segun Adebayo' />
        </Box>
      </Center>
    </>
  );
};

export default Hero;
