import React from 'react';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { BsMoon, BsSun } from 'react-icons/bs';

const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <IconButton
        onClick={toggleColorMode}
        size='md'
        _hover={{
          bgGradient: 'linear(to-r, red.500, yellow.500)',
        }}
      >
        {colorMode === 'light' ? <BsMoon /> : <BsSun />}
      </IconButton>
    </>
  );
};

export default DarkMode;
