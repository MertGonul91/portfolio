import React from 'react';
import { Box, Flex, Text, useMediaQuery, Divider } from '@chakra-ui/react';
import MotionBox from './MotionBox';
import Skills from './Skills';

const About = () => {
  const [mobile] = useMediaQuery('(max-width: 450px)');

  const about = "I'm Mert Gönül, a Full Stack Developer and an Architect.";
  return (
    <>
      <Box>
        <Flex textAlign='center'>
          <MotionBox
            initial={{ scale: 0 }}
            animate={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 450 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Text fontSize={mobile ? '0.75rem' : '1rem'} text-align='center'>
              {about}
            </Text>
          </MotionBox>
        </Flex>

        <Divider pt={mobile ? '20px' : '40px'} />
        <Skills />
      </Box>
    </>
  );
};

export default About;
