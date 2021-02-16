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
  const about =
    "I'm Mert Gönül, an avid self taught Full Stack Developer with Architecture background.";
  return (
    <>
      <Container maxW={mobile ? '95vw' : '60vw'} maxH='90vh'>
        <Flex
          justifyContent='center'
          alignContent='center'
          alignItems='center'
          flexWrap='wrap'
        >
          {mobile ? (
            <Text fontSize='0.75rem' text-align='center' m='20px' w='80vw'>
              {about}
            </Text>
          ) : (
            <Flex flex='1' justifyContent='center'>
              <About />
            </Flex>
          )}

          <Flex
            flex='2'
            justifyContent='center'
            direction={mobile ? 'column' : 'row'}
          >
            <Image
              src='/img/deneme.png'
              height='40vh'
              margin='0 auto'
              minWidth='10vh'
              maxHeight={mobile ? '30vh' : '40vh'}
              alignSelf='center'
            />
            <Flex
              direction={mobile ? 'row' : 'column'}
              justifyContent='space-evenly'
            >
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
