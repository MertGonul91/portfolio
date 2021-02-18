import React, { useState } from 'react';
import {
  Link,
  Box,
  Flex,
  Spacer,
  Text,
  Divider,
  Image,
  useMediaQuery,
  Icon,
} from '@chakra-ui/react';

import { projects } from '../db/projects';
import MotionBox from '../components/MotionBox';
import { AiFillFilePdf } from 'react-icons/ai';

const Projects = () => {
  const [mobile] = useMediaQuery('(max-width: 450px)');
  const [projectId, setProjectId] = useState(0);

  const is = mobile ? 8 : 12;

  let name = projectId > 0 && projects.architecture[projectId - 1].name;

  return (
    <>
      <MotionBox
        exit={{ x: -2000 }}
        transition={{ duration: 1.1, ease: [0.87, 0, 0.13, 1] }}
      >
        <Flex
          justifyContent='center'
          alignItems='center'
          direction={mobile ? 'column-reverse' : 'row-reverse'}
        >
          {projectId > 0 && !mobile ? (
            <MotionBox
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ y: 100, opacity: 0 }}
            >
              <Flex
                direction='column'
                justifyContent='center'
                alignItems='center'
                w='40vw'
                position='relative'
              >
                <Image
                  m='20px'
                  src={projects.architecture[projectId - 1].img}
                />

                <MotionBox
                  initial={{ y: -200, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.8 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  exit={{ opacity: 0 }}
                  overflow='hidden'
                  position='absolute'
                  top='20px'
                  left='20px'
                >
                  <Text color='white' fontStyle='oblique' fontSize='2rem'>
                    {name}
                  </Text>
                </MotionBox>
              </Flex>
            </MotionBox>
          ) : (
            <Flex
              justifyContent='center'
              alignItems='center'
              w={mobile ? '90vw' : '40vw'}
              direction='column'
            >
              <MotionBox
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                display='flex'
                justifyContent='center'
              >
                <Link
                  href='https://drive.google.com/file/d/11pJlX3Dka1FvYqEweYEVxvj2QYRV_Kst/view?usp=sharing'
                  isExternal
                  display='flex'
                  alignItems='center'
                  mt='5vh'
                >
                  <Icon as={AiFillFilePdf} w={is} h={is} />
                </Link>
              </MotionBox>
              <Text mt='1vh' mb='3vh' fontSize={mobile ? '0.7rem' : '0.85rem'}>
                click to see more of my works.
              </Text>
            </Flex>
          )}

          <Box w={mobile ? '90vw' : '50vw'}>
            {projects.architecture.map((project) => (
              <Link key={project.key} href={project.link} isExternal>
                <Flex
                  w={mobile ? '90vw' : '40vw'}
                  h={mobile ? '6vh' : '12vh'}
                  onMouseEnter={() => setProjectId(project.id)}
                  onMouseLeave={() => setProjectId(0)}
                  p='20px'
                  m='20px'
                  alignItems='center'
                >
                  <Text
                    fontSize={mobile ? '0.7rem' : '1xl'}
                  >{`0${project.id}.`}</Text>
                  <Divider
                    orientation='vertical'
                    h={mobile ? '6vh' : '40px'}
                    ml='20px'
                  />
                  <Spacer />
                  <Text fontSize={mobile ? '1rem' : '3xl'}>{project.name}</Text>
                  <Spacer />
                </Flex>
                <Divider w='40vw' />
              </Link>
            ))}
          </Box>
        </Flex>
      </MotionBox>
    </>
  );
};

export default Projects;
