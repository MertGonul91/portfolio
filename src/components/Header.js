import React from 'react';
import DarkMode from './DarkMode';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Flex justifyContent='space-between'>
        <Box p='10'>
          <Link as={RouterLink} to='/'>
            <Text fontSize='1.1rem'>home.</Text>
          </Link>
        </Box>

        <Box p='10'>
          <DarkMode />
        </Box>

        <Box p='10'>
          <Link as={RouterLink} to='/projects'>
            <Text fontSize='1.1rem'>webdev projects.</Text>
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
