import React from 'react';
import Header from '../components/Header';
import { Box, Center } from '@chakra-ui/react';

const Projects = () => {
  return (
    <>
      <Box w='auto' h='100vh'>
        <Header />
        <Center>
          <Box _hover={{ bg: 'black', color: 'white' }}>
            <h1>PROJECTS</h1>
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

export default Projects;
