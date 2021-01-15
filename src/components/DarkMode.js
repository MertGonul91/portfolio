import React from 'react';
import {
  IconButton,
  useColorMode,
  useMediaQuery,
  Icon,
  Center,
} from '@chakra-ui/react';
import { BsMoon, BsSun } from 'react-icons/bs';
import MotionBox from './MotionBox';

const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [mobile] = useMediaQuery('(max-width: 450px)');
  return (
    <>
      <Center>
        <MotionBox
          boxSize='40px'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          margin='auto'
        >
          <Center>
            <IconButton
              onClick={toggleColorMode}
              size={mobile ? 'sm' : 'md'}
              margin='auto'
            >
              {colorMode === 'light' ? (
                <Icon as={BsMoon} margin='auto' />
              ) : (
                <Icon as={BsSun} margin='auto' />
              )}
            </IconButton>
          </Center>
        </MotionBox>
      </Center>
    </>
  );
};

export default DarkMode;
