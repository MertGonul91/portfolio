import React from 'react';
import {
  Button,
  IconButton,
  useColorMode,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { BsMoon, BsSun } from 'react-icons/bs';

const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <IconButton onClick={toggleColorMode} size='md'>
        {colorMode === 'light' ? <BsMoon /> : <BsSun />}
      </IconButton>
    </>
  );
};

export default DarkMode;
