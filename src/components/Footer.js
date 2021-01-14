import React from 'react';
import { Box, Flex, Spacer, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <Flex>
        <Box p='10'>
          <Link as={RouterLink} to='/contact'>
            <Text fontSize='1.1rem'> say hi.</Text>
          </Link>
        </Box>
        <Spacer />
        <Box p='10'>
          <Link as={RouterLink} to='/architecture'>
            <Text fontSize='1.1rem'>architecture projects.</Text>
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default Footer;
