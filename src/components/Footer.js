import React from 'react';
import { Flex, Spacer, Link, Text, useMediaQuery } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const [mobile] = useMediaQuery('(max-width: 450px)');
  return (
    <>
      <Flex p='0 40px 20px 40px' justifyContent='center'>
        <Flex justifyContent='flex-start' flex='1'>
          <Link as={RouterLink} to='/contact'>
            <Text fontSize={mobile ? '0.8rem' : '1.1rem'}> say hi.</Text>
          </Link>
        </Flex>
        <Spacer />
        <Flex justifyContent='flex-end' flex='1' ml='auto'>
          <Link as={RouterLink} to='/architecture'>
            <Text fontSize={mobile ? '0.8rem' : '1.1rem'}>
              architecture projects.
            </Text>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
