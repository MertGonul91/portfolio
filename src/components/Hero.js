import React from 'react';
import {
  Image,
  Box,
  Flex,
  Text,
  Center,
  useMediaQuery,
  Spacer,
  Grid,
  GridItem,
  Icon,
} from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import MotionBox from './MotionBox';

const Hero = () => {
  const [desktop] = useMediaQuery('(min-width: 1280px)');
  const [mobile] = useMediaQuery('(max-width: 450px)');

  const about = "I'm Mert Gönül, a Full Stack Developer and an Architect.";

  return (
    <>
      {desktop ? (
        <Flex justifyContent='center'>
          <Center pos='relative' w='100px' boxSize='md'>
            <Box pos='absolute' left='-350px' w='300px'>
              <Text fontSize='1rem'>{about}</Text>
              <Flex justifyContent='space-around' mt='50px' alignItems='center'>
                <Flex direction='column' alignItems='center'>
                  <MotionBox
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon as={FaHtml5} w={12} h={12} />
                  </MotionBox>
                  <Text mt='10px'>html.</Text>
                </Flex>
                <Flex direction='column' alignItems='center'>
                  <MotionBox
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon as={FaCss3Alt} w={12} h={12} />
                  </MotionBox>
                  <Text mt='10px'>css.</Text>
                </Flex>
                <Flex direction='column' alignItems='center'>
                  <MotionBox
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon as={FaJs} w={12} h={12} />
                  </MotionBox>
                  <Text mt='10px'>javascript.</Text>
                </Flex>
              </Flex>
              <Flex justifyContent='space-around' mt='50px'>
                <Flex direction='column' alignItems='center'>
                  <MotionBox
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon as={FaReact} w={12} h={12} />
                  </MotionBox>

                  <Text mt='10px'>react js.</Text>
                </Flex>
                <Flex direction='column' alignItems='center'>
                  <MotionBox
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon as={FaNodeJs} w={12} h={12} />
                  </MotionBox>

                  <Text mt='10px'>node js.</Text>
                </Flex>
                <Flex direction='column' alignItems='center'>
                  <MotionBox
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon as={DiMongodb} w={12} h={12} />
                  </MotionBox>

                  <Text mt='10px'>mongo db.</Text>
                </Flex>
              </Flex>
            </Box>
          </Center>
        </Flex>
      ) : mobile ? (
        <Flex direction='column' justifyContent='center' alignItems='center'>
          <Box w='250px' m='30px'>
            <Text fontSize='1rem'>{about}</Text>
          </Box>
          <Center w='150px'></Center>
        </Flex>
      ) : (
        <Flex direction='column' justifyContent='center' alignItems='center'>
          <Box w='300px' m='60px'>
            <Text fontSize='1rem'>{about}</Text>
          </Box>
          <Center w='100px' boxSize='sm'></Center>
        </Flex>
      )}
    </>
  );
};

export default Hero;
