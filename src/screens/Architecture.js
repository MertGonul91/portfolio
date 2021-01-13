import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/react';

const Architecture = () => {
  return (
    <>
      <Container maxW='80vw'>
        <Flex direction='column' h='100vh'>
          <Header />
          <Spacer />
          <Box>
            <Text fontSize='4xl'>Architecture </Text>
          </Box>
          <Spacer />
          <Footer />
        </Flex>
      </Container>
    </>
  );
};

export default Architecture;
