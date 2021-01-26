import React, { useState } from 'react';
import DarkMode from './DarkMode';
import { Flex, Link, Text, useMediaQuery } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import MotionBox from './MotionBox';

const Header = () => {
  const { pathname } = useLocation();
  const [mobile] = useMediaQuery('(max-width: 450px)');
  const [out, setOut] = useState(false);
  return (
    <>
      <Flex justifyContent='center' p='40px' alignItems='center'>
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
          p='0 30px 0 30px'
          justifyContent='center'
          alignItems='center'
        >
          <DarkMode />
        </Flex>

        <Flex ml='auto' flex='1' justifyContent='flex-end'>
          <Link as={RouterLink} onClick={() => setOut(true)} to='/projects'>
            {pathname === '/projects' || (
              <MotionBox exit={out && { opacity: 0 }}>
                <Text fontSize={mobile ? '0.8rem' : '1.1rem'}>
                  webdev projects.
                </Text>
              </MotionBox>
            )}
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
