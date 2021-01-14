import React from 'react';
import DarkMode from './DarkMode';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Flex justifyContent='center'>
        <Flex
          pt='10'
          pl='10'
          mr='auto'
          ml='0'
          flex='1'
          justifyContent='flex-start'
        >
          <Link as={RouterLink} to='/'>
            <Text fontSize='1.1rem'>home.</Text>
          </Link>
        </Flex>

        <Flex m='auto' p='5' pt='10' justifyContent='center'>
          <DarkMode />
        </Flex>

        <Flex
          pt='10'
          pr='10'
          pl='5'
          ml='auto'
          flex='1'
          justifyContent='flex-end'
        >
          <Link as={RouterLink} to='/projects'>
            <Text fontSize='1.1rem'>webdev projects.</Text>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
