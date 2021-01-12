import React from 'react';
import {
  Button,
  Box,
  Flex,
  Spacer,
  Link,
  useColorMode,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  function Dark() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <header>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? 'Sunny' : 'Nighty'}
        </Button>
      </header>
    );
  }

  return (
    <>
      <Flex>
        <Box p='10'>
          <Link as={RouterLink} to='/'>
            Home
          </Link>
        </Box>
        <Spacer />
        <Box p='10'>
          <Dark />
        </Box>
        <Spacer />
        <Box p='10'>
          <Link as={RouterLink} to='/projects'>
            WebDev Projects
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
