import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import MotionBox from '../components/MotionBox';

const Contact = () => {
  return (
    <>
      <MotionBox
        exit={{ x: -2000 }}
        transition={{ duration: 1.1, ease: [0.87, 0, 0.13, 1] }}
      >
        <Box m='auto' textAlign='center'>
          <Text fontSize='4xl'>Contact </Text>
        </Box>
      </MotionBox>
    </>
  );
};

export default Contact;
