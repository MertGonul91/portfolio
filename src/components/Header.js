import React from 'react';
import DarkMode from './DarkMode';
import { Flex, Link, Text, useMediaQuery } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const [mobile] = useMediaQuery('(max-width: 450px)');
  return (
    <>
      <Flex justifyContent='center' p='0 40px 40px 40px' alignItems='center'>
        <Flex
          mr='auto'
          flex='1'
          justifyContent='flex-start'
          alignItems='center'
        >
          <Link as={RouterLink} to='/'>
            <Text fontSize={mobile ? '0.8rem' : '1.1rem'}>home.</Text>
          </Link>
        </Flex>

        <Flex
          m='auto'
          p='5'
          pt='10'
          justifyContent='center'
          alignItems='center'
        >
          <DarkMode />
        </Flex>

        <Flex ml='auto' flex='1' justifyContent='flex-end'>
          <Link as={RouterLink} to='/projects'>
            <Text fontSize={mobile ? '0.8rem' : '1.1rem'} textAlign='end'>
              webdev projects.
            </Text>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
