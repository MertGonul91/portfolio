import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/react';
import MotionBox from '../components/MotionBox';

const Contact = () => {
  return (
    <>
      <Container maxW='100vw' minW='auto'>
        <Flex direction='column' h='100vh'>
          <Header />
          <Spacer />
          <MotionBox
            exit={{ x: -2000 }}
            transition={{ duration: 1.1, ease: [0.87, 0, 0.13, 1] }}
          >
            <Box m='auto' textAlign='center'>
              <Text fontSize='4xl'>Contact </Text>
            </Box>
          </MotionBox>
          <Spacer />
          <Footer />
        </Flex>
      </Container>
    </>
  );
};

export default Contact;
