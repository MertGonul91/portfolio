import React from 'react';
import { Box, Center, Flex, Spacer, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Box w='auto' h='100vh'>
        <Flex>
          <Box p='20'>
            <Link as={RouterLink} to='/'>
              Home
            </Link>
          </Box>
          <Spacer />
          <Box p='20'>
            <Link as={RouterLink} to='/projects'>
              WebDev Projects
            </Link>
          </Box>
        </Flex>
        <Center>
          <Box _hover={{ bg: 'black', color: 'white' }}>
            <h1>I'm Mert Gönül, a developer and an architect.</h1>
            <img src='' alt='' />
          </Box>
          <Box _hover={{ bg: 'black', color: 'white' }}>
            <img src='' alt='' />
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default Home;
