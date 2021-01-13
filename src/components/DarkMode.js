import React from 'react';
import { Box, forwardRef, IconButton, useColorMode } from '@chakra-ui/react';
import { BsMoon, BsSun } from 'react-icons/bs';
import MotionBox from './MotionBox';

import { motion, isValidMotionProp } from 'framer-motion';

const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <MotionBox
        boxSize='40px'
        drag='x'
        dragConstraints={{ left: -0, right: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <IconButton onClick={toggleColorMode} size='md'>
          {colorMode === 'light' ? <BsMoon /> : <BsSun />}
        </IconButton>
      </MotionBox>
    </>
  );
};

export default DarkMode;
