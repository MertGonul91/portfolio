import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/react';

const Projects = () => {
  return (
    <>
      <Flex direction='column' h='100vh'>
        <Header />
        <Spacer />
        <Box>
          <Text fontSize='4xl'>Project </Text>
          <Text fontSize='4xl'>Project </Text>
          <Text fontSize='4xl'>Project </Text>
          <Text fontSize='4xl'>Project </Text>
          <Text fontSize='4xl'>Project </Text>
        </Box>
        <Spacer />
        <Footer />
      </Flex>
    </>
  );
};

export default Projects;
