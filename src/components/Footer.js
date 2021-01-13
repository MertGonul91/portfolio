import React from 'react';
import { Box, Flex, Spacer, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <Flex>
        <Box p='10'>
          <Link as={RouterLink} to='/contact'>
            say hi.
          </Link>
        </Box>
        <Spacer />
        <Box p='10'>
          <Link as={RouterLink} to='/architecture'>
            architecture projects.
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default Footer;
