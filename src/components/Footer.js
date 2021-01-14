import React from 'react';
import { Box, Flex, Spacer, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <Flex justifyContent='center'>
        <Flex p='10' justifyContent='flex-start' flex='1'>
          <Link as={RouterLink} to='/contact'>
            <Text fontSize='1.1rem'> say hi.</Text>
          </Link>
        </Flex>
        <Spacer />
        <Flex p='10' justifyContent='flex-end' flex='1' ml='auto'>
          <Link as={RouterLink} to='/architecture'>
            <Text fontSize='1.1rem'>architecture projects.</Text>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
