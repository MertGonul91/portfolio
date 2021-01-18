import React, { useState, useEffect } from 'react';
import { Flex, Spacer, Link, Text, useMediaQuery } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import MotionBox from './MotionBox';

const Footer = () => {
  const { pathname } = useLocation();
  const [mobile] = useMediaQuery('(max-width: 450px)');
  const [out, setOut] = useState(false);
  console.log(pathname);
  return (
    <>
      <Flex p='40px' justifyContent='center'>
        <Flex justifyContent='flex-start' flex='1'>
          <Link as={RouterLink} to='/contact'>
            <Text fontSize={mobile ? '0.8rem' : '1.1rem'}> say hi.</Text>
          </Link>
        </Flex>
        <Spacer />

        <Text fontSize={mobile ? '0.5rem' : '0.8rem'}>
          &copy;2021 Mert Gönül
        </Text>

        <Spacer />
        <Flex justifyContent='flex-end' flex='1' ml='auto'>
          <Link as={RouterLink} onClick={() => setOut(true)} to='/architecture'>
            <MotionBox exit={out && { opacity: 0 }}>
              {pathname === '/architecture' ? null : (
                <Text fontSize={mobile ? '0.8rem' : '1.1rem'}>
                  architecture projects.
                </Text>
              )}
            </MotionBox>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
