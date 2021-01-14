import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/react';

const Contact = () => {
  return (
    <>
      <Container maxW='100vw' minW='auto'>
        <Flex direction='column' h='100vh'>
          <Header />
          <Spacer />
          <Box m='auto'>
            <Text fontSize='4xl'>Contact </Text>
          </Box>
          <Spacer />
          <Footer />
        </Flex>
      </Container>
    </>
  );
};

export default Contact;
