import React from 'react';
import DarkMode from './DarkMode';
import { Box, Flex, Spacer, Link, useMediaQuery, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const [mobile] = useMediaQuery('(max-width: 450px)');
  return (
    <>
      {mobile ? (
        <Flex
          flexWrap='wrap'
          alignItems='center'
          justifyContent='space-between'
        >
          <Box p='0' m='2px'>
            <Link as={RouterLink} to='/'>
              <Text fontSize='xs'>home.</Text>
            </Link>
          </Box>

          <Box p='0' m='2px'>
            <DarkMode />
          </Box>

          <Box p='0' m='2px'>
            <Link as={RouterLink} to='/projects'>
              <Text fontSize='xs'>webdev projects.</Text>
            </Link>
          </Box>
        </Flex>
      ) : (
        <Flex>
          <Box p='10'>
            <Link as={RouterLink} to='/'>
              home.
            </Link>
          </Box>
          <Spacer />
          <Box p='10'>
            <DarkMode />
          </Box>
          <Spacer />
          <Box p='10'>
            <Link as={RouterLink} to='/projects'>
              webdev projects.
            </Link>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default Header;
