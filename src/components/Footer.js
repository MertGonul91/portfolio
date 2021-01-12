import React from 'react';
import { Box, Flex, Spacer, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <Flex>
        <Box p='10'>
          <Link as={RouterLink} to='/contact'>
            Say Hi!
          </Link>
        </Box>
        <Spacer />
        <Box p='10'>
          <Link as={RouterLink} to='/architecture'>
            Architecture Projects
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default Footer;
