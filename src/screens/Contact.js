import React from 'react';
import { Box, Image, Spacer, Text, useMediaQuery } from '@chakra-ui/react';
import MotionBox from '../components/MotionBox';

const Contact = () => {
  const [mobile] = useMediaQuery('(max-width: 450px)');
  return (
    <>
      <MotionBox
        exit={{ x: -2000 }}
        transition={{ duration: 1.1, ease: [0.87, 0, 0.13, 1] }}
      >
        <Box
          m='auto'
          textAlign='center'
          display='flex'
          justifyContent='center'
          flexDirection='column'
        >
          <Text m='20px' fontSize={mobile ? '1rem' : '3xl'}>
            Would you like to share some thoughts?{' '}
          </Text>
          <Text fontSize={mobile ? '0.7rem' : '1xl'}>Drop me a message </Text>
          <Image
            src='/img/deneme.png'
            height={mobile ? '30vh' : '40vh'}
            margin='0 auto'
            minWidth='10vh'
          />
          <Spacer />
          <Text m='20px' fontSize={mobile ? '1rem' : '2xl'}>
            Email: mertgonul91@gmail.com{' '}
          </Text>
        </Box>
      </MotionBox>
    </>
  );
};

export default Contact;
