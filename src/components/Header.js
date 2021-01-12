import React from 'react';
import { Box, Flex, Spacer, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
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
          <Link as={RouterLink} to='/projects'>
            WebDev Projects
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
