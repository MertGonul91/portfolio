import React from 'react';
import { Flex, Text, useMediaQuery, Icon } from '@chakra-ui/react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import MotionBox from './MotionBox';

const Skills = () => {
  const [mobile] = useMediaQuery('(max-width: 450px)');
  const fs = mobile ? '0.75rem' : '0.9rem';
  return (
    <>
      <Flex direction='column' justifyContent='center'>
        <Flex
          justifyContent='space-around'
          mt={mobile ? '10px' : '50px'}
          alignItems='center'
        >
          <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Flex
              direction='column'
              alignItems='center'
              m={mobile ? '10px' : '0'}
            >
              <Icon as={FaHtml5} w={mobile ? 5 : 12} h={mobile ? 5 : 12} />
              <Text mt='10px' text-align='center' fontSize={fs}>
                html.
              </Text>
            </Flex>
          </MotionBox>
          <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Flex
              direction='column'
              alignItems='center'
              m={mobile ? '10px' : '0'}
            >
              <Icon as={FaCss3Alt} w={mobile ? 5 : 12} h={mobile ? 5 : 12} />
              <Text mt='10px' text-align='center' fontSize={fs}>
                css.
              </Text>
            </Flex>
          </MotionBox>
          <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Flex
              direction='column'
              alignItems='center'
              m={mobile ? '10px' : '0'}
            >
              <Icon as={FaJs} w={mobile ? 5 : 12} h={mobile ? 5 : 12} />
              <Text mt='10px' text-align='center' fontSize={fs}>
                javascript.
              </Text>
            </Flex>
          </MotionBox>
        </Flex>
        <Flex justifyContent='space-around' mt={mobile ? '10px' : '50px'}>
          <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Flex
              direction='column'
              alignItems='center'
              m={mobile ? '10px' : '0'}
            >
              <Icon as={FaReact} w={mobile ? 5 : 12} h={mobile ? 5 : 12} />
              <Text mt='10px' text-align='center' fontSize={fs}>
                react js.
              </Text>
            </Flex>
          </MotionBox>
          <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Flex
              direction='column'
              alignItems='center'
              m={mobile ? '10px' : '0'}
            >
              <Icon as={FaNodeJs} w={mobile ? 5 : 12} h={mobile ? 5 : 12} />
              <Text mt='10px' text-align='center' fontSize={fs}>
                node js.
              </Text>
            </Flex>
          </MotionBox>
          <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Flex
              direction='column'
              alignItems='center'
              m={mobile ? '10px' : '0'}
            >
              <Icon as={DiMongodb} w={mobile ? 5 : 12} h={mobile ? 5 : 12} />
              <Text mt='10px' text-align='center' fontSize={fs}>
                mongo db.
              </Text>
            </Flex>
          </MotionBox>
        </Flex>
      </Flex>
    </>
  );
};

export default Skills;
