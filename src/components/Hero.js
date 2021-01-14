import React from 'react';
import { Box, Flex, Text, Center, useMediaQuery, Icon } from '@chakra-ui/react';
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
              <MotionBox
                initial={{ scale: 0 }}
                animate={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 450 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Text fontSize='1rem'>{about}</Text>
              </MotionBox>
              <Flex justifyContent='space-around' mt='50px' alignItems='center'>
                <MotionBox
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Flex direction='column' alignItems='center'>
                    <Icon as={FaHtml5} w={12} h={12} />
                    <Text mt='10px'>html.</Text>
                  </Flex>
                </MotionBox>
                <MotionBox
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Flex direction='column' alignItems='center'>
                    <Icon as={FaCss3Alt} w={12} h={12} />
                    <Text mt='10px'>css.</Text>
                  </Flex>
                </MotionBox>
                <MotionBox
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Flex direction='column' alignItems='center'>
                    <Icon as={FaJs} w={12} h={12} />
                    <Text mt='10px'>javascript.</Text>
                  </Flex>
                </MotionBox>
              </Flex>
              <Flex justifyContent='space-around' mt='50px'>
                <MotionBox
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Flex direction='column' alignItems='center'>
                    <Icon as={FaReact} w={12} h={12} />
                    <Text mt='10px'>react js.</Text>
                  </Flex>
                </MotionBox>
                <MotionBox
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Flex direction='column' alignItems='center'>
                    <Icon as={FaNodeJs} w={12} h={12} />
                    <Text mt='10px'>node js.</Text>
                  </Flex>
                </MotionBox>
                <MotionBox
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Flex direction='column' alignItems='center'>
                    <Icon as={DiMongodb} w={12} h={12} />
                    <Text mt='10px'>mongo db.</Text>
                  </Flex>
                </MotionBox>
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
