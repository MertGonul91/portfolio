import React from 'react';
import {
  Flex,
  Container,
  Image,
  Icon,
  Link,
  useMediaQuery,
  Text,
} from '@chakra-ui/react';
import { AiFillLinkedin, AiFillGithub, AiFillFilePdf } from 'react-icons/ai';
import About from './About';
import MotionBox from './MotionBox';

const Hero = () => {
  const [mobile] = useMediaQuery('(max-width: 450px)');
  const fs = mobile ? '0.75rem' : '0.9rem';
  const is = mobile ? 8 : 12;
  return (
    <>
      <Container maxW='60vw' maxH='90vh'>
        <Flex
          justifyContent='center'
          alignContent='center'
          alignItems='center'
          flexWrap='wrap'
        >
          <Flex flex='1' justifyContent='center'>
            <About />
          </Flex>
          <Flex flex='2' justifyContent='center'>
            <Image
              src='/img/deneme.png'
              height='40vh'
              margin='0 auto'
              minWidth='10vh'
            />
            <Flex direction='column' justifyContent='center'>
              <MotionBox
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                display='flex'
                justifyContent='center'
              >
                <Link
                  href='https://github.com/MertGonul91'
                  m='20px auto'
                  isExternal
                  textAlign='center'
                >
                  <Icon as={AiFillGithub} w={is} h={is} />
                  <Text mt='10px' align='center' fontSize={fs}>
                    github.
                  </Text>
                </Link>
              </MotionBox>
              <MotionBox
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                display='flex'
                justifyContent='center'
              >
                <Link
                  href='https://www.linkedin.com/in/mertgonul91/'
                  m='20px auto'
                  isExternal
                  textAlign='center'
                >
                  <Icon as={AiFillLinkedin} w={is} h={is} />
                  <Text mt='10px' align='center' fontSize={fs}>
                    linkedin.
                  </Text>
                </Link>
              </MotionBox>
              <MotionBox
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                display='flex'
                justifyContent='center'
              >
                <Link
                  href='/cv.pdf'
                  m='20px auto'
                  isExternal
                  textAlign='center'
                >
                  <Icon as={AiFillFilePdf} w={is} h={is} />
                  <Text mt='10px' align='center' fontSize={fs}>
                    checkout my cv.
                  </Text>
                </Link>
              </MotionBox>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Hero;
