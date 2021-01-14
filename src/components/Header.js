import React from 'react';
import DarkMode from './DarkMode';
import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Flex justifyContent='space-between'>
        <Box p='10'>
          <Link as={RouterLink} to='/'>
            home.
          </Link>
        </Box>

        <Box p='10'>
          <DarkMode />
        </Box>

        <Box p='10'>
          <Link as={RouterLink} to='/projects'>
            webdev projects.
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
