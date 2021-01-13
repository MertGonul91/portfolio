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
                  <Icon as={FaHtml5} w={12} h={12} /> HTML
                </Flex>
                <Flex direction='column' alignItems='center'>
                  <Icon as={FaCss3Alt} w={12} h={12} /> CSS
                </Flex>
                <Flex direction='column' alignItems='center'>
                  <Icon as={FaJs} w={12} h={12} /> Javascript
                </Flex>
              </Flex>
              <Flex justifyContent='space-around' mt='50px'>
                <Flex direction='column' alignItems='center'>
                  <Icon as={FaReact} w={12} h={12} /> React JS
                </Flex>
                <Flex direction='column' alignItems='center'>
                  <Icon as={FaNodeJs} w={12} h={12} /> Node JS
                </Flex>
                <Flex direction='column' alignItems='center'>
                  <Icon as={DiMongodb} w={12} h={12} /> Mongo DB
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
